import React, { useState } from 'react';
import { ChatMessage } from '../types/chatTypes';

interface MessageComponentProps {
  message: ChatMessage;
  updateMessage: (updatedMessage: ChatMessage) => void;
}

const MessageComponent: React.FC<MessageComponentProps> = ({ message, updateMessage }) => {
  const [contentValue, setContentValue] = useState(message.content || '');
  const [functionCallName, setFunctionCallName] = useState(message.function_call?.name || '');
  const [functionCallArgString, setFunctionCallArgString] = useState(JSON.stringify(message.function_call?.arguments) || '');
  const [nameValue, setNameValue] = useState(message.name || '');

  return (
    <div>
      <label>
        Role:
        <select value={message.role} onChange={(e) => updateMessage({ ...message, role: e.target.value as any })}>
          <option value="user">User</option>
          <option value="assistant">Assistant</option>
          <option value="system">System</option>
          <option value="function">Function</option>
        </select>
      </label>
      <label>
        Content:
        <input type="text" value={contentValue} onChange={(e) => setContentValue(e.target.value)} onBlur={() => updateMessage({ ...message, content: contentValue })} />
      </label>
      <label>
        Function Call Name:
        <input type="text" value={functionCallName} onChange={(e) => setFunctionCallName(e.target.value)} onBlur={() => updateMessage({ ...message, function_call: { ...message.function_call, name: functionCallName } })} />
      </label>
      <label>
        Function Call Arguments:
        <input type="text" value={functionCallArgString} onChange={(e) => setFunctionCallArgString(e.target.value)} onBlur={() => updateMessage({ ...message, function_call: { ...message.function_call, arguments: JSON.parse(functionCallArgString) } })} />
      </label>
      <label>
        Name:
        <input type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)} onBlur={() => updateMessage({ ...message, name: nameValue })} />
      </label>
    </div>
  );
};

export default MessageComponent;
