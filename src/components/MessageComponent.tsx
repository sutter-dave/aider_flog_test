import React, { useState } from 'react';
import { ChatMessage } from '../types/chatTypes';
import './MessageComponent.css';

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
    <div className="message-component">
      <div className="form-group">
        <label>
          Role:
          <select value={message.role} onChange={(e) => updateMessage({ ...message, role: e.target.value as any })}>
            <option value="user">User</option>
            <option value="assistant">Assistant</option>
            <option value="system">System</option>
            <option value="function">Function</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label>
          Content:
          <input type="text" value={contentValue} onChange={(e) => setContentValue(e.target.value)} onBlur={() => updateMessage({ ...message, content: contentValue })} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Function Call Name:
          <input type="text" value={functionCallName} onChange={(e) => setFunctionCallName(e.target.value)} onBlur={() => updateMessage({ ...message, function_call: { ...message.function_call, name: functionCallName } })} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Function Call Arguments:
          <input type="text" value={functionCallArgString} onChange={(e) => setFunctionCallArgString(e.target.value)} onBlur={() => updateMessage({ ...message, function_call: { ...message.function_call, arguments: JSON.parse(functionCallArgString) } })} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Name:
          <input type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)} onBlur={() => updateMessage({ ...message, name: nameValue })} />
        </label>
      </div>
    </div>
  );
};

export default MessageComponent;
