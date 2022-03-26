export interface Config {
  publicKey: string;
}

export interface IdentifyPayload {
  first_name?: string;
  last_name?: string;
  email: string;
  attributes?: object;
}

export interface Track {
  platform?: "ios" | "web" | "android";
  device_id?: string;
  properties?: object;
}

export type RequestMethod = "POST" | "GET" | "DELETE";