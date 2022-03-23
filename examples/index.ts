import Lumen from "../index";

const lumenClient = Lumen({
  publicKey: "<-public-key->",
});

lumenClient.identify("oskjhssoik", {
  email: "test@gmail.com",
  first_name: "john",
  last_name: "dev",
  attributes: {
    value: 2345,
  },
});

lumenClient.track("omoo");

lumenClient.track("omoo", {
  properties: {},
});
