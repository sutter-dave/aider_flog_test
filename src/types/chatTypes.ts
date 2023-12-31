export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant' | 'system' | 'function';
  content?: string;
  function_call?: {
    name: string;
    arguments: Record<string, unknown>;
  };
  name?: string;
};

export type ChatSettings = {
  apiKey: string;
  model: string;
  temperature: number;
  maxLength?: number;
};

export const defaultChatSettings: ChatSettings = {
  apiKey: 'dummy-api-key',
  model: 'gpt-3.5-turbo',
  temperature: 0,
};

export type ChatFunction = {
  name: string;
  description?: string;
  parameters: {
    type: string;
    properties: Record<string, unknown>;
    required: string[];
  };
};
