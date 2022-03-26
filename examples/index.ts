import Lumen from "../index";

const lumenClient = Lumen({
  publicKey: "lBEx3NzJ8x34LJcQYrOBaY5tr0QYzgjuQA",
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

  const trackResponse = await lumenClient.track("signed_out", {
    device_id: "12345",
    platform: "web",
    properties: {
      userType: "Member",
      duration: 400,
    },
  });

  console.log({ trackResponse });
};

run();
