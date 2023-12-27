# Minutes Maker
Minutes Maker is a web application designed to effortlessly transform audio recordings of meetings into well-organized minutes using cutting-edge technologies. The app leverages Deepgram Nova 2 for accurate audio transcriptions and OpenAI's GPT-3.5 Turbo for generating concise and clear meeting minutes.

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

## How it Works
Users upload an audio file in either .mp3 or .wav format using the web interface.

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
Obtain API keys for Deepgram Nova 2 and OpenAI's GPT-3.5 Turbo. Update the app.js file with your keys:

# Run the app:
npm start

Visit http://localhost:3000 in your web browser to access the application.

License
This project is licensed under the GPL 3 License.

Feel free to contribute, report issues, or suggest improvements!
