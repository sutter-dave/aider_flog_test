# Component: ChatHistory

## Purpose

To display a list of chat messages and allow users to interact with the chat AI assistant.

## States

- Messages: A list of `ChatMessage` objects.

## User Interactions

- Edit messages: Users can edit all messages to be sent to the chat AI assistant.
- Send messages: Users can send a message to the chat AI assistant. The message is then appended to the chat history.

## Component Behavior

- Display messages: The component displays a list of chat messages.
- Append messages: The component has a function to append a new message to the list.
- Send messages: The component uses the `chatRequest` function to send a message to the chat AI assistant. When the response is received, it is appended to the chat history.

## Props

None.

## Dependencies

- [MessageComponent](MessageComponent.md): The ChatHistory component depends on the MessageComponent to display individual chat messages.
- [ChatTypes](../types/ChatTypes.md): The ChatHistory component uses the `ChatMessage` type from `ChatTypes`.
- [chatRequest](../functions/chatRequest.md): The ChatHistory component uses the `chatRequest` function to send messages to the chat AI assistant.
