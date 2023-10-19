# Infolog

## 10/18/23

progress:

- I worked on the project setup, chat history and settings form.

notes:

- The assistant made these suggestions and we only got to work on 2 of them.

1. **Chat History Component** (`docs\components\ChatHistory.md`):
    - Component Name: ChatHistory
    - Purpose: To display a list of chat messages and allow users to edit all messages to be sent to the chat AI assistant.
    - States: A list of messages.
    - Public Functions: A function to append a new message to the list.
    - Inputs: None.
    - Outputs: None.
    - Dependencies: The Message component.

2. **Settings Form Component** (`docs\components\SettingsForm.md`):
    - Component Name: SettingsForm
    - Purpose: To allow users to input parameters for their request to the AI assistant.
    - States: The API Key, Model, Temperature, and Max Length.
    - Public Functions: A function to submit the form.
    - Inputs: None.
    - Outputs: The form data.
    - Dependencies: None.

3. **Function Form Component** (`docs\components\FunctionForm.md`):
    - Component Name: FunctionForm
    - Purpose: To allow users to define the available functions for the AI assistant.
    - States: The function specifications.
    - Public Functions: A function to submit the form.
    - Inputs: None.
    - Outputs: The form data.
    - Dependencies: None.

4. **AI Assistant Request Service** (`docs\services\aiRequest.md`):
    - Service Name: aiRequest
    - Purpose: To send requests to the AI assistant and handle the responses.
    - Functions: A function to send a request and a function to handle the response.
    - Inputs: The request data.
    - Outputs: The response data.
    - Dependencies: The ChatHistory and SettingsForm components.

- We got sidetracked when the assistant wanted to update the DesignDocuments.md file. We probably should update it,
but I didn't like the changes it suggested. We discussed it a little and I decided on this list of sections for
the react elements

- `Purpose`
- `States`
- `User Interactions`
- `Component Behavior`
- `Props`
- `Dependencies`
- (The assistant wanted `Outputs` but I nixed it. I should review this. For now, the outputs were reflected in the props and behaviors.)

TODO: refine the document structure!