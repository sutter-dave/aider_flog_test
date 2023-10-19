# Types: ChatTypes

This document describes the types used in the chat application.

## Type: ChatMessage

This type represents a single chat message. It should include the following fields:

- `id`: A unique identifier for the message.
- `role`: The role of the message sender. The values for this field are `user`, `assistant`, `system`, `function`.
- `content` (optional): The text of the message.
- `function_call` (optional): An object with the required string fields `name` and `arguments`.
- `name` (optional): The name of the sender.

## Type: ChatSettings

This type represents the settings for the chat. It should include the following fields:

- API Key: The key used for communication with the AI assistant.
- Model: The model used by the AI assistant.
- Temperature: The temperature setting for the AI assistant.
- Max Length: The maximum length of the response from the AI assistant.

## Type: ChatFunction

This type represents a function that can be executed by the chat AI assistant. It is a JSON object that follows a specific schema. Here are two examples:

### Example: EXECUTE_ACTIONS_LIST_SCHEMA

```json
{
  "name": "execute_actions",
  "parameters": {
    "type": "object",
    "properties": {
      "actions": {
        "type": "array",
        "items": {
          "type": "object"
        },
        "description": "This is a list of individual actions to be done."
      }
    },
    "required": ["actions"]
  }
}
```

### Example: SET_TYPE_AND_SECTION_SCHEMA

```json
{
  "name": "set_type_and_section",
  "description": "This function submits the item type and section as used by the incident management system",
  "parameters": {
    "type": "object",
    "properties": {
      "type": {
        "type": "string",
        "description": "Selected type for the item"
      },
      "section": {
        "type": "string",
        "description": "This is a section of the incident report to add the item"
      }
    },
    "required": ["type","section"]
  }
}
```
