import fetch from 'cross-fetch';
import { BASE_URL } from './lib/constants';
import {bannerSchema, configSchema, identifySchema} from './lib/schema';
import validate from './lib/validate';

import { Config, IdentifyPayload, KeyValueObject, RequestMethod } from './types';
import {createHtmlElement} from "./lib/utils";

const Lumen = (c: Config) => {
  validate(configSchema, c);
  const _config: Config = c;

  const _request = async (path: string, payload: any, method: RequestMethod = 'POST') => {
    try {
      const url = `${BASE_URL}${path}`;
      const response = await fetch(url, {
        method,
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          api_key: `${_config.publicKey}`,
        },
      });

      const json = await response.json();

      if (!response.ok) {
        const error = json?.message || 'API connection error';
        throw Error(error);
      }

      return json?.data;
    } catch (e: unknown) {
      if (_config.debug) {
        // tslint:disable-next-line:no-console
        console.log(`🟥 ${e}`);
      }
      return undefined;
    }
  };

  const identify = (identifier: string, data: IdentifyPayload) => {
    if (!identifier) {
      throw Error('key [identifier] is required');
    }

    if (!data.email && !data.phone_number) {
      throw Error('[email] or [phone_number] is required');
    }

    validate(identifySchema, data);

    const identifyPayload = {
      identifier,
      ...data,
    };

    return _request('/customer/identify', identifyPayload);
  };

  const track = async (identifier: string, event_name: string, properties: KeyValueObject = {}) => {
    if (!event_name) {
      throw Error('key [event_name] is required');
    }

    const trackPayload = {
      properties,
      event_name,
      identifier,
      source: 'js-sdk',
    };

    return _request('/event/track', trackPayload);
  };

  const initializeBanner = async () => {
    const bannerConfig = await _request('banner', undefined, "GET");

    validate(bannerSchema, bannerConfig)

    const body = document.body;
    const bannerElement = createHtmlElement(bannerConfig.htmlContent);
    body.prepend(bannerElement);
  };


  return { identify, track, initializeBanner};
};

export default Lumen;
