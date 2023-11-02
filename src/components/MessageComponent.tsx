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
        <div className="label-right">
          Role:
        </div>
        <div className="input-container">
          <select value={message.role} onChange={(e) => updateMessage({ ...message, role: e.target.value as any })}>
            <option value="user">User</option>
            <option value="assistant">Assistant</option>
            <option value="system">System</option>
            <option value="function">Function</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <div className="label-right">
          Content:
        </div>
        <div className="input-container">
          <textarea value={contentValue} onChange={(e) => setContentValue(e.target.value)} onBlur={() => updateMessage({ ...message, content: contentValue })} />
        </div>
      </div>
      <div className="form-group">
        <div className="label-right">
          Function Call Name:
        </div>
        <div className="input-container">
          <input type="text" value={functionCallName} onChange={(e) => setFunctionCallName(e.target.value)} onBlur={() => updateMessage({ ...message, function_call: { ...message.function_call, name: functionCallName } })} />
        </div>
      </div>
      <div className="form-group">
        <div className="label-right">
          Function Call Arguments:
        </div>
        <div className="input-container">
          <textarea value={functionCallArgString} onChange={(e) => setFunctionCallArgString(e.target.value)} onBlur={() => updateMessage({ ...message, function_call: { ...message.function_call, arguments: JSON.parse(functionCallArgString) } })} />
        </div>
      </div>
      <div className="form-group">
        <div className="label-right">
          Name:
        </div>
        <div className="input-container">
          <input type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)} onBlur={() => updateMessage({ ...message, name: nameValue })} />
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
