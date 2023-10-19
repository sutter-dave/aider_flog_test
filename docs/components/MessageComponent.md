# Component: MessageComponent

## Purpose

To display and allow editing of a single chat message.

## Props

- `message`: An object of type `ChatMessage` that represents the message to be displayed and edited.
- `updateMessage`: A function that updates the message. This function is passed in from the parent component.

## User Interactions

- Edit role: Users can select the role of the message sender from a dropdown menu. The options are `user`, `assistant`, `system`, `function`.
- Edit content: Users can edit the content of the message when the content field is displayed.
- Edit function call name: Users can edit the name of the function call when the function call field is displayed.
- Edit function call arguments: Users can edit the arguments of the function call when the function call field is displayed.
- Edit name: Users can edit the name of the message sender when the name field is displayed.
- Select between content and function call: Users can choose to display and edit either the content or the function call of the message using a radio button. The initial state matches which field is populated, with the default being the content field if neither is populated. The previous value is preserved when switching between content and function_call.
- Show/Hide name field: Users can choose to show or hide the name of the message sender using a checkbox. The default state is not showing. The previous value is preserved when toggling the visibility of the name field.

## Component Behavior

- Update state: When a field is updated and loses focus, the state is updated using the `updateMessage` callback.
- Switch between content and function_call: When the user switches between displaying and editing the content and the function_call, the component updates the message state accordingly. The previous value is preserved when switching between content and function_call.
- Update name state: When the visibility of the name field changes, the component updates the message state accordingly. If the name field is not visible, the name state is set to undefined. The previous value is preserved when toggling the visibility of the name field.

## Layout

The component is laid out as a form with one field per line. The fields are displayed in the following order: role, content/function call, name. Each field is accompanied by a label. The content and function call fields are mutually exclusive and are switched using a radio button. The name field can be shown or hidden using a checkbox.

The active fields are displayed consecutively. Any "hidden" fields occupy a single line at the end, with a smaller size. For example, in the normal case of content showing and the name hidden, the last line of the form would contain the function call label and the associated radio button and the name label and its associated checkbox.

## Dependencies

- [ChatTypes](../types/ChatTypes.md): The MessageComponent uses the `ChatMessage` type from `ChatTypes`.
