import React, { useState } from 'react';
import { ChatMessage, ChatSettings, ChatFunction, defaultChatSettings } from '../types/chatTypes';
import MessageComponent from './MessageComponent';

const ChatHistory: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [settings, setSettings] = useState<ChatSettings>(defaultChatSettings);
  const [functions, setFunctions] = useState<ChatFunction[]>([]);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showFunctions, setShowFunctions] = useState<boolean>(false);

  const handleEditMessage = (updatedMessage: ChatMessage) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === updatedMessage.id ? updatedMessage : message
      )
    );
  };

  const handleDeleteMessage = (id: string) => {
    // Implement functionality here
  };

  const handleSendMessage = () => {
    console.log(messages); // Print message list to console
  };

  const handleInsertMessage = (position: number) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: 'New message',
    };
    setMessages((prevMessages) => [
      ...prevMessages.slice(0, position),
      newMessage,
      ...prevMessages.slice(position),
    ]);
  };

  return (
    <div>
      <button onClick={() => handleInsertMessage(0)}>Insert Message</button>
      {messages.map((message, index) => (
        <div key={message.id}>
          <MessageComponent message={message} updateMessage={handleEditMessage} />
          <button onClick={() => handleInsertMessage(index + 1)}>Insert Message</button>
        </div>
      ))}
      <div><button onClick={handleSendMessage}>Send</button></div>
    </div>
  );
};

export default ChatHistory;