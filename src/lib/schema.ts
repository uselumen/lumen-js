import { InputSchema } from './validate';

export const configSchema: InputSchema = {
  publicKey: {
    type: 'string',
  },
};

export const identifySchema: InputSchema = {
  email: {
    type: 'string',
  },
  first_name: {
    type: 'string',
    optional: true,
  },
  last_name: {
    type: 'string',
    optional: true,
  },
  attributes: {
    type: 'object',
  },
};

export const trackPropertySchema: InputSchema = {
  platform: {
    type: 'string',
    optional: true,
  },
  device_id: {
    type: 'string',
    optional: true,
  },
  properties: {
    type: 'object',
    optional: true,
  },
};
