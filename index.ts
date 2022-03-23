import fetch from "cross-fetch";
import { BASE_URL } from "./lib/constants";
import {
  configSchema,
  identifySchema,
  trackPropertySchema,
} from "./lib/schema";
import validate from "./lib/validate";
import { Config, IdentifyPayload, RequestMethod, Track } from "./types";

const Lumen = (c: Config) => {
  validate(configSchema, c);
  let _config: Config = c;

  let _identifier = "";

  const _request = async (
    path: string,
    payload: any,
    method: RequestMethod = "POST"
  ) => {
    const url = `${BASE_URL}${path}`;
    const response = await fetch(url, {
      method,
      body: payload,
      headers: {
        Authorization: `Bearer ${_config.publicKey}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("error", json);
      throw Error("API connection error");
    }

    console.log({ json });
    return json;
  };

  const identify = (identifier: string, data: IdentifyPayload) => {
    if (!identifier) {
      throw Error("key [identifier] is required");
    }

    validate(identifySchema, data);

    _identifier = identifier;

    const payload = {
      identifier,
      ...data,
    };

    return _request("/customer/identify", payload);
  };

  const track = async (eventName: string, input: Track = {}) => {
    if (!eventName) {
      throw Error("key [eventName] is required");
    }

    validate(trackPropertySchema, input);
    const payload = { ...input, identifier: _identifier, source: "js-sdk" };
    return _request("/", payload);
  };

  return { identify, track };
};

export default Lumen;
