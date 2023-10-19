# Function: chatRequest

## Purpose

To send a request to the AI assistant with the current chat history, settings, and function list.

## Inputs

- `messages`: A list of `ChatMessage` objects representing the current chat history.
- `settings`: A `ChatSettings` object representing the current chat settings.
- `functions`: A list of `ChatFunction` objects representing the current function list.

## Outputs

- Returns a Promise that resolves to a `ChatMessage` object representing the AI assistant's response.

## High-Level Workflow

1. The function formats the `messages`, `settings`, and `functions` inputs into the format expected by the AI assistant.
2. The function sends an HTTPS request to the AI assistant with these formatted parameters.
3. The function processes the response from the AI assistant into a `ChatMessage` object.
4. The `ChatMessage` object is returned as a Promise.

## Dependencies

- [ChatTypes](../types/ChatTypes.md): The chatRequest function uses the `ChatMessage`, `ChatSettings`, and `ChatFunction` types from `ChatTypes`.
