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

export type ChatFunction = {
  name: string;
  parameters: {
    type: string;
    properties: Record<string, { type: string; description: string }>;
    required: string[];
  };
};
