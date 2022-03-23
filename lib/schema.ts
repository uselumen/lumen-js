import { InputSchema } from "./validate";

export const configSchema: InputSchema = {
  publicKey: {
    type: "string",
  },
};

export const identifySchema: InputSchema = {
  identifier: {
    type: "string",
  },
  email: {
    type: "string",
  },
  attributes: {
    type: "object",
  },
};

export const trackPropertySchema: InputSchema = {
  platform: {
    type: "string",
    optional: true,
  },
  deviceId: {
    type: "string",
    optional: true,
  },
  properties: {
    type: "object",
    optional: true,
  },
};
