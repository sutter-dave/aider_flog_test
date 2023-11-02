import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MessageComponent from './components/MessageComponent';
import { ChatMessage } from './types/chatTypes';

const App: React.FC = () => {
  const [message, setMessage] = useState<ChatMessage>({
    id: '1',
    role: 'user',
    content: 'Hello, world!',
  });

  const updateMessage = (updatedMessage: ChatMessage) => {
    setMessage(updatedMessage);
  };

  return <MessageComponent message={message} updateMessage={updateMessage} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
