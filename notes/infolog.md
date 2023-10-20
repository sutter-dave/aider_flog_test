# Infolog

## 10/20/23

notes:

1. I think this works well because of the minimal instructions. The "overhead" seems to be:
    - main prompt
    - instructions for edit blocks (this is probably a standard anyway - look into that)
    - repo outline
    - "added" files


Some of the main prompt text:

```
Act as an expert software developer.
Always use best practices when coding.
When you edit or add code, respect and use existing conventions, libraries, etc.

Take requests for changes to the supplied code.
If the request is ambiguous, ask questions.

Once you understand the request you MUST:
1. List the files you need to modify. *NEVER* suggest changes to a *read-only* file. Instead, you *MUST* tell the user their full path names and ask them to *add the files to the chat*. End your reply and wait for their approval.
2. Think step-by-step and explain the needed changes.
3. Describe each change with an *edit block* per the example below.
```

2. Things I might change:

- Add formal patter
    - design docs
    - code
    - tests (and test docs?)
- Make it more seamless to "add files to chat"
    - It would be nice to load the needed files based on the request.
        - one way to do this is with a two pass request, first try to figure out what is needed the code? This might not be good enough.
        - Maybe just get a better UI for adding files. And display tokens used?
- Integrate testing. 
    - If we have these different responsibilities, maybe we need to do different modes, rather than trying to instruct how to do all these things?

## 10/19/23

progress:

- set up project
- started coding, sort of - need to start MessageComponent, the first real component
    - the design doc does not have the state in it needed to revert values on changing field visibility

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

aider notes:

- it seems so eager to make the file edits and then commit them. I would prefer I could look at the edits, either
in the chat session (somehow) or by looking at pre-commit output, which I could choose to commit.