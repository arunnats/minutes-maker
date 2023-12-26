const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const axios = require('axios'); 
const path = require('path');

const app = express();
const port = 3000;

//const openai = new OpenAI({ apiKey: " " });

app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
