# GPT-Link API

This repository contains a simple Express application that provides an API to interact with OpenAI models like GPT-4. The application is available at https://gpt-link.simplifieduser.com. Please note that this project is not affiliated in any way with OpenAI.

## Getting Started

To use this API, you'll need to send a POST request to the following endpoint:

https://gpt-link.simplifieduser.com/

The request must include a JSON payload containing the following fields:

- `auth`: Your OpenAI API key.
- `question`: The question you want to ask the selected model.

Optionally, you can also provide a `model` field to specify a different model (default is "gpt-4"):

```json
{
  "auth": "your_openai_api_key",
  "question": "What is the capital of France?",
  "model": "gpt-4"
}
```

## Response

The API will return a JSON object containing the answer from the selected model:

```json
{
  "answer": "The capital of France is Paris."
}
```

## Error Handling

- If you don't provide the auth field in the request, the API will return a 401 Unauthorized status.
- If you don't provide the question field in the request, the API will return a 400 Bad Request status.
- If there's an issue with the OpenAI API, the response will contain the corresponding status code.

## Running Locally

To run the application locally, you'll need to have Node.js installed. Clone the repository, install the dependencies, and start the server:

```bash
git clone https://github.com/simplifieduser/gpt-link.git
cd gpt-link
npm install
npm start
```