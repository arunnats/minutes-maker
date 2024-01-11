# Minutes Maker

[Preview](http://www.minutesmaker.arunnats.com/) 

<img width="947" alt="Screenshot 2023-12-27 181401" src="https://github.com/arunnats/minutes-maker/assets/118368673/7687735d-3eee-4688-8660-18119dcc834d">
<img width="947" alt="Screenshot 2023-12-27 181414" src="https://github.com/arunnats/minutes-maker/assets/118368673/41888492-5135-4762-a73a-c9763cffbc2e">
<img width="947" alt="Screenshot 2023-12-27 181444" src="https://github.com/arunnats/minutes-maker/assets/118368673/4c6519c7-89e8-4b5e-b303-afdb49f68889">

Desktop site

Minutes Maker is a web application designed to effortlessly transform audio recordings of meetings into well-organized minutes using cutting-edge technologies. The app leverages Deepgram Nova 2 for accurate audio transcriptions and OpenAI's GPT-3.5 Turbo for generating concise and clear meeting minutes.

<img width="180" alt="Screenshot 2023-12-27 152132" src="https://github.com/arunnats/minutes-maker/assets/118368673/fc12ab81-6a92-4e29-960e-30f0568dc4c5">

Mobile site

## Features
Audio Format Support: Minutes Maker accepts both .mp3 and .wav audio file formats, providing flexibility for users to upload their meeting recordings.

Fast Analysis: The application uses Deepgram Nova 2 to swiftly transcribe the audio content. The results are then processed by GPT-3.5 Turbo to generate meeting minutes, ensuring a seamless and efficient user experience.

## Stack and Frameworks
The web app is built using the following technologies:

Express.js: The backend of the application is powered by Express.js, a fast and minimalist web framework for Node.js. It handles server-side logic, routing, and interacts with Deepgram and OpenAI APIs.

EJS (Embedded JavaScript): EJS is employed for server-side rendering, allowing dynamic content generation on the server before sending it to the client.

Multer: For handling file uploads, Multer, a middleware for handling multipart/form-data, is integrated into the app.

Axios: To make HTTP requests, Axios is used. It facilitates communication with the OpenAI API for GPT-3.5 Turbo.

Bootstrap: The frontend is styled and made responsive using Bootstrap, providing a clean and user-friendly interface.

Deepgram SDK: The Deepgram Nova 2 API is accessed using the official Deepgram SDK to transcribe the uploaded audio file.

Google Cloud services: For handling the file storage and hosting the app

## How it Works
Users upload an audio file in either .mp3 or .wav format using the web interface.

The audio file is stored in a Google Cloud bucket and is processed from there.

The app utilizes Deepgram Nova 2 to transcribe the audio content, capturing detailed information about the meeting.

The transcribed content is then passed to OpenAI's GPT-3.5 Turbo, which generates clear and organized meeting minutes based on the provided audio transcript.

The final minutes are displayed to the user, providing a concise summary of the meeting's key points.

## Getting Started
To run the web app locally, follow these steps:

# Clone the repository:
git clone https://github.com/your-username/minutes-maker.git

# Install dependencies:
bash
cd minutes-maker
npm install

# Set up API keys:
Obtain API keys for Deepgram Nova 2 and OpenAI's GPT-3.5 Turbo. Update the config.json and google cloud bucket files with your keys:

# Run the app:
npm start

Visit http://localhost:3000 in your web browser to access the application.

License
This project is licensed under the GPL 3 License.

Feel free to contribute, report issues, or suggest improvements!
