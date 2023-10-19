# Component: SettingsForm

## Purpose

To allow users to specify parameters for their request to the AI assistant.

## States

- API Key: The key used for communication.
- Model: Choice of model with provided options.
- Temperature: Numeric value, defaulting to 0.
- Max Length: Numeric value, defaulting to undefined.

## User Interactions

- Update API Key: Users can update the API Key.
- Select Model: Users can select a model from the provided options.
- Update Temperature: Users can update the temperature.
- Update Max Length: Users can update the max length.

## Component Behavior

- Update states: The component has functions to update each of the states. When a state value is updated, the `onSettingsChange` function is called with an object containing the current state values.
- Pass state values: The component passes the current state values to the parent component or other parts of the application through the `onSettingsChange` function.

## Props

- `onSettingsChange`: A function that is called whenever the state values change. This function takes an object as a parameter. The object has the following structure:
  - `apiKey`: The current value of the API Key state.
  - `model`: The current value of the Model state.
  - `temperature`: The current value of the Temperature state.
  - `maxLength`: The current value of the Max Length state.

## Dependencies

None.
