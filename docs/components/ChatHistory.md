# Component: ChatHistory

## Purpose

To display a list of chat messages and allow users to interact with the chat AI assistant.

## States

- Messages: A list of `ChatMessage` objects.
- Settings: An object of type `ChatSettings` that contains the settings for the chat.

## User Interactions

- Edit messages: Users can edit all messages to be sent to the chat AI assistant.
- Insert messages: Users can insert new messages at any position in the chat history.
- Delete messages: Users can delete any message from the chat history.
- Send messages: Users can send the message history, settings, and functions list to the chat AI assistant using the `chatRequest` function. The response from the AI assistant is then appended to the chat history.

## Component Behavior

- Display messages: The component displays a list of chat messages.
- Insert messages: The component has a function to insert a new message at any position in the chat history. If no index is specified, the new message is appended at the end.
- Delete messages: The component has a function to delete any message from the chat history.
- Send messages: The component uses the `chatRequest` function to send the message history, settings, and functions list to the chat AI assistant. When the response is received, it is appended to the chat history.

## Props

- `functions`: An array of `ChatFunction` objects that represent the available functions for the AI assistant. This is passed in from the parent component.

## Dependencies

- [MessageComponent](MessageComponent.md): The ChatHistory component depends on the MessageComponent to display individual chat messages.
- [ChatTypes](../types/ChatTypes.md): The ChatHistory component uses the `ChatMessage`, `ChatSettings`, and `ChatFunction` types from `ChatTypes`.
- [chatRequest](../functions/chatRequest.md): The ChatHistory component uses the `chatRequest` function to send messages to the chat AI assistant.
- [SettingsForm](SettingsForm.md): The ChatHistory component uses the `SettingsForm` component to manage the settings for the chat.
- [FunctionsForm](FunctionsForm.md): The ChatHistory component uses the `FunctionsForm` component to manage the functions for the AI assistant.
