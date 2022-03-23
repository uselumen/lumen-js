import Lumen from "../index";

Lumen.init({
  publicKey: "Hello world",
});

Lumen.identify("oskjhssoik", {
  email: "test@gmail.com",
  attributes: {
    value: 2345,
  },
});

Lumen.track("omoo");

Lumen.track("omoo", {
  properties: {},
});
