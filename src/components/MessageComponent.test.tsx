import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MessageComponent from './MessageComponent';
import { ChatMessage } from '../types/chatTypes';

test('renders message component', () => {
  const message: ChatMessage = {
    id: '1',
    role: 'user',
    content: 'Hello, world!',
  };

  const updateMessage = jest.fn();

  const { getByTestId, getByText } = render(<MessageComponent message={message} updateMessage={updateMessage} />);

  const roleElement = getByTestId('role-select');
  expect(roleElement).toBeInTheDocument();

  const contentElement = getByTestId('content-input');
  expect(contentElement).toBeInTheDocument();

  const functionCallNameElement = getByTestId('function-call-name-input');
  expect(functionCallNameElement).not.toBeInTheDocument();

  const functionCallArgStringElement = getByTestId('function-call-arguments-input');
  expect(functionCallArgStringElement).not.toBeInTheDocument();

  const nameElement = getByTestId('name-input');
  expect(nameElement).not.toBeInTheDocument();

  const includeNameFieldButton = getByText(/Include Name Field/i);
  expect(includeNameFieldButton).toBeInTheDocument();

  const functionCallInputButton = getByText(/Function Call Input/i);
  expect(functionCallInputButton).toBeInTheDocument();
});

test('updates message role', () => {
  const message: ChatMessage = {
    id: '1',
    role: 'user',
    content: 'Hello, world!',
  };

  const updateMessage = jest.fn();

  const { getByTestId } = render(<MessageComponent message={message} updateMessage={updateMessage} />);

  const roleElement = getByTestId('role-select') as HTMLSelectElement;
  fireEvent.change(roleElement, { target: { value: 'assistant' } });

  expect(updateMessage).toHaveBeenCalledWith({ ...message, role: 'assistant' });
});

test('updates message content', () => {
  const message: ChatMessage = {
    id: '1',
    role: 'user',
    content: 'Hello, world!',
  };

  const updateMessage = jest.fn();

  const { getByTestId } = render(<MessageComponent message={message} updateMessage={updateMessage} />);

  const contentElement = getByTestId('content-input') as HTMLInputElement;
  fireEvent.change(contentElement, { target: { value: 'Hello, universe!' } });
  fireEvent.blur(contentElement);

  expect(updateMessage).toHaveBeenCalledWith({ ...message, content: 'Hello, universe!' });
});

test('updates message function call', () => {
  const message: ChatMessage = {
    id: '1',
    role: 'user',
    function_call: {
      name: 'greet',
      arguments: { greeting: 'Hello, world!' },
    },
  };

  const updateMessage = jest.fn();

  const { getByTestId } = render(<MessageComponent message={message} updateMessage={updateMessage} />);

  const functionCallNameElement = getByTestId('function-call-name-input') as HTMLInputElement;
  fireEvent.change(functionCallNameElement, { target: { value: 'say' } });
  fireEvent.blur(functionCallNameElement);

  const functionCallArgStringElement = getByTestId('function-call-arguments-input') as HTMLInputElement;
  fireEvent.change(functionCallArgStringElement, { target: { value: JSON.stringify({ greeting: 'Hello, universe!' }) } });
  fireEvent.blur(functionCallArgStringElement);

  expect(updateMessage).toHaveBeenCalledWith({ ...message, function_call: { ...message.function_call, name: 'say' } });
  expect(updateMessage).toHaveBeenCalledWith({ ...message, function_call: { ...message.function_call, arguments: { greeting: 'Hello, universe!' } } });
});

test('updates message name', () => {
  const message: ChatMessage = {
    id: '1',
    role: 'user',
    name: 'John Doe',
  };

  const updateMessage = jest.fn();

  const { getByTestId } = render(<MessageComponent message={message} updateMessage={updateMessage} />);

  const nameElement = getByTestId('name-input') as HTMLInputElement;
  fireEvent.change(nameElement, { target: { value: 'Jane Doe' } });
  fireEvent.blur(nameElement);

  expect(updateMessage).toHaveBeenCalledWith({ ...message, name: 'Jane Doe' });
});

test('shows and hides name field', () => {
  const message: ChatMessage = {
    id: '1',
    role: 'user',
    content: 'Hello, world!',
  };

  const updateMessage = jest.fn();

  const { getByText, getByTestId } = render(<MessageComponent message={message} updateMessage={updateMessage} />);

  const includeNameFieldButton = getByText(/Include Name Field/i);
  fireEvent.click(includeNameFieldButton);

  const nameElement = getByTestId('name-input');
  expect(nameElement).toBeInTheDocument();

  const omitNameFieldButton = getByText(/Omit Name Field/i);
  fireEvent.click(omitNameFieldButton);

  expect(nameElement).not.toBeInTheDocument();
});

test('switches between content and function call', () => {
  const message: ChatMessage = {
    id: '1',
    role: 'user',
    content: 'Hello, world!',
  };

  const updateMessage = jest.fn();

  const { getByText, getByTestId } = render(<MessageComponent message={message} updateMessage={updateMessage} />);

  const functionCallInputButton = getByText(/Function Call Input/i);
  fireEvent.click(functionCallInputButton);

  const functionCallNameElement = getByTestId('function-call-name-input');
  expect(functionCallNameElement).toBeInTheDocument();

  const normalMessageInputButton = getByText(/Normal Message Input/i);
  fireEvent.click(normalMessageInputButton);

  expect(functionCallNameElement).not.toBeInTheDocument();
});
