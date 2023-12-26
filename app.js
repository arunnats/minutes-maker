const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const multer = require('multer');
const axios = require('axios'); 
const path = require('path');
const fs = require('fs');
const { createClient } = require('@deepgram/sdk');

const app = express();
const port = 3000;

//const openai = new OpenAI({ apiKey: " " });
const deepgram = createClient('');

app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/getAnswer', upload.single('filesInput'), async (req, res) => {
    const file = req.file;
    console.log("haii")
    console.log("File uploaded:", file.path);

    try {
        const response = await deepgram.listen.prerecorded.transcribeFile(
            fs.readFileSync(file.path),
            {
                model: 'nova-2-meeting',
                version: 'latest',
                language: 'en-IN',
                detect_language: 'true',
                punctuate: 'true',
                profanity_filter: 'false',
                redact: 'false',
                diarize: 'true',
                smart_format: 'true',
                filler_words: 'false',
                summarize: 'v2'
            }
        );

        console.log('Deepgram response:', response);
        const transcript = response.result.results.channels[0].alternatives[0].transcript;
        const summary = response.result.results.summary;

        const result = {
            transcript: transcript,
            summary: summary
        };

        const prompt = `Given the following transcript: ${result.transcript} and summary: ${result.summary} from a meeting, please generate the minutes of the meeting. The minutes should be concise and clear, organized by topic, and include key decisions made and action items assigned. Please do not include fields including but not limited to 'Next Meeting', 'Chair', 'Speaker', or 'Date' unless they are explicitly mentioned in the transcript. break up the summary into easy readable points.`;

        console.log(JSON.stringify(result, null, 2));

        const chatGptResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: prompt },
            ],
            model: "gpt-3.5-turbo",
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ',
            },
        });

        console.log('ChatGPT response:', chatGptResponse.data);
        const minutes = chatGptResponse.data.choices[0].message.content;
        console.log('Minutes:', minutes);
        res.json(minutes);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
