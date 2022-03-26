import Lumen from "../index";

const lumenClient = Lumen({
  publicKey: "hAHHNKg83SAZXuSOc0xjutHhWsxF3rl0YU",
});

const run = async () => {
  const idResponse = await lumenClient.identify("oskjhssoik11", {
    email: "test@gmail.com",
    first_name: "john",
    last_name: "dev",
    attributes: {
      value: 2345,
    },
  });

  console.log({ idResponse });

  const trackResponse = await lumenClient.track("user_signed_in", {
    device_id: "12345",
    platform: "web",
    properties: {
      hasDoneKyc: "true",
      isAdmin: "true",
    },
  });

  console.log({ trackResponse });
};

run();
