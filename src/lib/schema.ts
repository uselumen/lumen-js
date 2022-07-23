import { InputSchema } from './validate';

export const configSchema: InputSchema = {
  publicKey: {
    type: 'string',
  },
};

export const identifySchema: InputSchema = {
  email: {
    type: 'string',
    optional: true,
  },
  phone_number: {
    type: 'string',
    optional: true,
  },

  first_name: {
    type: 'string',
    optional: true,
  },
  last_name: {
    type: 'string',
    optional: true,
  },
  device_id: {
    type: 'string',
    optional: true,
  },

  attributes: {
    type: 'object',
    optional: true,
  },
};
