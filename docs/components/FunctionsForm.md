# Component: FunctionsForm

## Purpose

To allow users to define the available functions for the AI assistant.

## States

- `functions`: An array of `ChatFunction` objects that represent the available functions for the AI assistant.

## User Interactions

- Edit functions: Users can edit the functions list as free text in a single text area.

## Component Behavior

- Update functions: The component has a function to update the `functions` state when the text in the text area changes. When the text changes, the `onFunctionsChange` function is called with the updated list of functions.

## Props

- `onFunctionsChange`: A function that is called whenever the `functions` state changes. This function takes an array of `ChatFunction` objects as a parameter.

## Dependencies

- [ChatTypes](../types/ChatTypes.md): The FunctionsForm component uses the `ChatFunction` type from `ChatTypes`.
