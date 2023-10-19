# Prompt Sandbox Application

## Overview
  
This tool is designed to facilitate the development and testing of prompts for an AI assistant chatbot, It let's the
user construct a complete message history that will compose a chat request.

## Main Features:

1. **Chat Message History**: 
    - There is a chat-like interface with the user having the ability to edit all messages to be sent to the chat AI assistant, giving
    control to construct the complete query.
    - All message properties are editable, including role, query text / function request and name.
    - Responses of submission are appended to the end of the message history.

2. **Request Settings Form**:
    - Allows users to specify parameters for their request to the AI assistant:
        - API Key: The key used for communication.
        - Model: Choice of model with provided options.
        - Temperature: Numeric value, defaulting to 0.
        - Max Length: Numeric value, defaulting to undefined.

3. **Function Specification Form**:
    - Enables users to define the available functions for the AI assistant.

4. **AI Assistant Request Mechanism**:
    - Sends an HTTPS request to the AI assistant.
    - On successful response, appends the AI’s response to the chat history.
    - During an ongoing request, prevents initiation of another.
    - Displays any errors and allows users to acknowledge and dismiss them.

### Related Documentation:

- [`ProjectSetup`](ProjectSetup.md) - Instructions for setting up the project environment.