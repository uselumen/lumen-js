export interface Config {
  publicKey: string;
  debug?: boolean;
}

export interface IdentifyPayload {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  attributes?: object;
  device_id?: string;
}

export interface Track {
  properties?: object;
}

export type RequestMethod = 'POST' | 'GET' | 'DELETE';

export interface KeyValueObject {
  [key: string]: any;
}
