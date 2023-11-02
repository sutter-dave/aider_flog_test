# Component: MessageComponent

## Purpose

To display and allow editing of a single chat message.

## Props

- `message`: An object of type `ChatMessage` that represents the message to be displayed and edited.
- `updateMessage`: A function that updates the message. This function is passed in from the parent component.

## States

- `contentValue`: A string representing the current value of the content. This state retains its value even when the content field is not displayed.
- `functionCallName`: A string representing the current value of the function call name. This state retains its value even when the function call field is not displayed.
- `functionCallArgString`: A string representing the current value of the function call argument string. This state retains its value even when the function call field is not displayed.
- `nameValue`: A string representing the current value of the name. This state retains its value even when the name field is not displayed.

## User Interactions

- Edit role: Users can select the role of the message sender from a dropdown menu. The options are `user`, `assistant`, `system`, `function`.
- Edit content: Users can edit the content of the message when the content field is displayed.
- Edit function call name: Users can edit the name of the function call when the function call field is displayed.
- Edit function call arguments: Users can edit the arguments of the function call when the function call field is displayed.
- Edit name: Users can edit the name of the message sender when the name field is displayed.
- Select between content and function call: Users can choose to display and edit either the content or the function call of the message. The initial state matches which field is populated, with the default being the content field if neither is populated. The previous value is preserved when switching between content and function_call.
- Show/Hide name field: Users can choose to show or hide the name of the message sender. The default state is not showing. The previous value is preserved when toggling the visibility of the name field.

## Component Behavior

- Update state: When a field is updated and loses focus, the state is updated using the `updateMessage` callback.
- Switch between content and function_call: When the user switches between displaying and editing the content and the function_call, the component updates the message state accordingly. The previous value is preserved when switching between content and function_call.
- Update name state: When the visibility of the name field changes, the component updates the message state accordingly. If the name field is not visible, the name state is set to undefined. The previous value is preserved when toggling the visibility of the name field.

## Layout

The component is laid out as a form with one field per line. The fields are displayed in the following order: role, content/function call, name. Each field is accompanied by a label. The content and function call fields are mutually exclusive and are switched button/link. The name field can be shown or hidden using a button.

The active fields are displayed consecutively. A single line after the fields contains the buttons to switch between content and function call and to
hide or show the name field.

Use the following labels for the button/links:

- Content showing: "Function Call Input"
- Function call showing: "Normal Message Input"

- Name showing: "Omit Name Field"
- Name hidden: "Include Name Field"

## Dependencies

- [ChatTypes](../types/ChatTypes.md): The MessageComponent uses the `ChatMessage` type from `ChatTypes`.
