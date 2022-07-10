export interface Config {
  publicKey: string;
}

export interface IdentifyPayload {
  first_name?: string;
  last_name?: string;
  email: string;
  phone_number?: string;
  attributes?: object;
  device_id?: string;
}

export interface Track {
  platform?: 'ios' | 'web' | 'android';
  properties?: object;
}

export type RequestMethod = 'POST' | 'GET' | 'DELETE';
