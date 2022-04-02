# Lumen

The Lumen JavaScript SDK allows you to seamlessly identify and track user attributes and events on your client. Plus other perks.

## Installation

Install the SDK via yarn or npm

```sh
$ npm install lumen-js

// or yarn

$ yarn add lumen-js
```

The SDK can be used on both the server and the client.

## Initialize the SDK

To use the SDK, you have to initialize the SDK with your public key. Any request that doesn't include a valid API key will return an error.

You can generate an API key from your Dashboard at any time.

```js
import Lumen from "lumen-js";

const lumenClient = Lumen({
  publicKey: "<your-public-key>",
});
```

## Identify users

You must identify users with a unique identifier before you can track their events. A new customer record is created if the identifier doesn't exist. If the identifier exists, then the customer record is updated with the new data supplied.

```js
lumenClient.identify("user-unique-identifier", {
  email: "user-email",
  first_name: "john",
  last_name: "doe",
  attributes: "object",
});
```

Ideally, identify should be called when a user creates a new account To update an existing user’s records, simply call identify and add any property you want to add or change. If the property already exists, we overwrite them. If it is new, we add them to the user's record.

> To ensure your data is in sync with our record, make sure you update your user's records when they change so as to prevent stale data. You can manage your user records on the dashboard.

## Track event

To track an event, simply call the track method. The property object is optional.

```js
// without any property
lumenClient.track("event_name");

// with custom properties

lumenClient.track("event_name", {
  propertyName: "--",
});
```
