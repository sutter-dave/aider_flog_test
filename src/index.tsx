import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatHistory from './components/ChatHistory';

const App: React.FC = () => {
  return <ChatHistory />;
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
