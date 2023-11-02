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
  const [functionCallArgString, setFunctionCallArgString] = useState(JSON.stringify(message.function_call?.arguments) || '{}');
  const [nameValue, setNameValue] = useState(message.name || '');
  const [showContent, setShowContent] = useState(true);
  const [showName, setShowName] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
    if (!showContent) {
      // Switching to content, update the message state with the content value
      updateMessage({ ...message, content: contentValue });
    } else {
      // Switching to function call, update the message state with the function call name and arguments
      updateMessage({ ...message, function_call: { name: functionCallName, arguments: JSON.parse(functionCallArgString) } });
    }
  };

  const toggleName = () => {
    setShowName(!showName);
    if (!showName) {
      // Showing the name field, update the message state with the name value
      updateMessage({ ...message, name: nameValue });
    } else {
      // Hiding the name field, update the message state with undefined for name
      updateMessage({ ...message, name: undefined });
    }
  };

  const handleFunctionCallArgStringChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setFunctionCallArgString(value);
    try {
      const parsedArgs = JSON.parse(value);
      updateMessage({ ...message, function_call: { ...message.function_call, arguments: parsedArgs } });
    } catch (error) {
      // Handle parsing error here (e.g. show an error message)
      console.error('Error parsing function call arguments:', error);
    }
  };

  return (
    <div className="message-component">
      <div className="form-group">
        <div className="label-right">
          Role:
        </div>
        <div className="input-container">
          <select data-testid="role-select" value={message.role} onChange={(e) => updateMessage({ ...message, role: e.target.value as any })}>
            <option value="user">User</option>
            <option value="assistant">Assistant</option>
            <option value="system">System</option>
            <option value="function">Function</option>
          </select>
        </div>
      </div>
      {showContent && (
        <div className="form-group">
          <div className="label-right">
            Content:
          </div>
          <div className="input-container">
            <textarea data-testid="content-input" rows={6} value={contentValue} onChange={(e) => setContentValue(e.target.value)} onBlur={() => updateMessage({ ...message, content: contentValue })} />
          </div>
        </div>
      )}
      {!showContent && (
        <div className="form-group">
          <div className="label-right">
            Function Call Name:
          </div>
          <div className="input-container">
            <input data-testid="function-call-name-input" type="text" value={functionCallName} onChange={(e) => setFunctionCallName(e.target.value)} onBlur={() => updateMessage({ ...message, function_call: { ...message.function_call, name: functionCallName } })} />
          </div>
        </div>
      )}
      {!showContent && (
        <div className="form-group">
          <div className="label-right">
            Function Call Arguments:
          </div>
          <div className="input-container">
            <textarea data-testid="function-call-arguments-input" rows={6} value={functionCallArgString} onChange={handleFunctionCallArgStringChange} onBlur={() => updateMessage({ ...message, function_call: { ...message.function_call, arguments: JSON.parse(functionCallArgString) } })} />
          </div>
        </div>
      )}
      {showName && (
        <div className="form-group">
          <div className="label-right">
            Name:
          </div>
          <div className="input-container">
            <input data-testid="name-input" type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)} onBlur={() => updateMessage({ ...message, name: nameValue })} />
          </div>
        </div>
      )}
      <div className="form-group">
        <div className="label-right"></div> {/* Empty label */}
        <div className="input-container">
          <button className="link-button" onClick={toggleContent}>{showContent ? 'Function Call Input' : 'Normal Message Input'}</button>
          <button className="link-button" onClick={toggleName}>{showName ? 'Omit Name Field' : 'Include Name Field'}</button>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
