import fetch from "cross-fetch";
import { BASE_URL } from "./lib/constants";
import { getIpAddress } from "./lib/ip";
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
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        api_key: `${_config.publicKey}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log({ json });
      const error = json?.message || "API connection error";
      throw Error(error);
    }

    return json?.data || {};
  };

  const identify = (identifier: string, data: IdentifyPayload) => {
    if (!identifier) {
      throw Error("key [identifier] is required");
    }

    validate(identifySchema, data);

    _identifier = identifier;

    const identifyPayload = {
      identifier,
      ...data,
    };

    return _request("/customer/identify", identifyPayload);
  };

  const track = async (event_name: string, input: Track = {}) => {
    if (!event_name) {
      throw Error("key [event_name] is required");
    }

    const ip_address = await getIpAddress();

    validate(trackPropertySchema, input);
    const trackPayload = {
      ...input,
      event_name,
      ip_address,
      identifier: _identifier,
      source: "js-sdk",
    };

    return _request("/event/track", trackPayload);
  };

  return { identify, track };
};

export default Lumen;
