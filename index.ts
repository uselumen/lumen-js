import fetch from "cross-fetch";
import { BASE_URL } from "./lib/constants";
import {
  configSchema,
  identifySchema,
  trackPropertySchema,
} from "./lib/schema";
import validate from "./lib/validate";
import { Config, IdentifyPayload, RequestMethod, Track } from "./types";

let _config: Config = {
  publicKey: "",
};

let _identifier = "";

const _request = async (
  path: string,
  payload: any,
  method: RequestMethod = "POST"
) => {
  const url = `${BASE_URL}/${path}`;
  const response = await fetch(url, {
    method,
    body: payload,
    headers: {
      Authorization: `Bearer ${_config.publicKey}`,
    },
  });
  if (!response.ok) {
    throw Error("API connection error");
  }
  return await response.json();
};

const init = (c: Config) => {
  validate(configSchema, c);
  _config = c;
};

const identify = (identifier: string, payload: IdentifyPayload) => {
  if (!identifier) {
    throw Error("key [identifier] is required");
  }
  _identifier = identifier;

  validate(identifySchema, payload);
  return _request("/", payload);
};

const track = async (eventName: string, input?: Track) => {
  if (!eventName) {
    throw Error("key [eventName] is required");
  }

  validate(trackPropertySchema, input);
  const payload = { ...input, identifier: _identifier, source: "js-sdk" };
  return _request("/", payload);
};

const Lumen = { track, identify, init };

export default Lumen;
