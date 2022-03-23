import Lumen from "../index";

const lumenClient = Lumen({
  publicKey: "<-public-key->",
});

lumenClient.identify("oskjhssoik", {
  email: "test@gmail.com",
  attributes: {
    value: 2345,
  },
});

lumenClient.track("omoo");

lumenClient.track("omoo", {
  properties: {},
});
