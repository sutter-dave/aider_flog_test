# Component: MessageComponent

## Purpose

To display and allow editing of a single chat message.

## Props

- `message`: An object of type `ChatMessage` that represents the message to be displayed and edited.
- `updateMessage`: A function that updates the message. This function is passed in from the parent component.

## User Interactions

- Edit role: Users can select the role of the message sender from a dropdown menu. The options are `user`, `assistant`, `system`, `function`.
- Edit content or function call: Users can choose to display and edit either the content or the function call of the message using a radio button. The initial state matches which field is populated, with the default being the content field if neither is populated.
- Edit name: Users can choose to display and edit the name of the message sender using a checkbox. The default state is not showing.

## Component Behavior

- Update state: When a field is updated and loses focus, the state is updated using the `updateMessage` callback.
- Switch between content and function_call: When the user switches between displaying and editing the content and the function_call, the component updates the state accordingly.

## Dependencies

- [ChatTypes](../types/ChatTypes.md): The MessageComponent uses the `ChatMessage` type from `ChatTypes`.
