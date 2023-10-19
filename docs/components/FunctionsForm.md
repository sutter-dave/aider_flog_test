# Component: FunctionsForm

## Purpose

To allow users to define the available functions for the AI assistant.

## States

- `functionsText`: A string that holds the current text in the text area.

## User Interactions

- Edit functions: Users can edit the functions list as free text in a single text area.
- Click save button: Users can click a save button to submit the updated functions list.

## Component Behavior

- Update functions text: The component has a function to update the `functionsText` state when the text in the text area changes.
- Click save button: When the save button is clicked, the `onFunctionsChange` function is called with the current `functionsText` state.

## Props

- `functions`: An array of `ChatFunction` objects that represent the available functions for the AI assistant. This is passed in from the parent component.
- `onFunctionsChange`: A function that is called whenever the `functions` state changes. This function takes an array of `ChatFunction` objects as a parameter.

## Dependencies

- [ChatTypes](../types/ChatTypes.md): The FunctionsForm component uses the `ChatFunction` type from `ChatTypes`.
