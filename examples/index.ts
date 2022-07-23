import Lumen from '../dist/index.js';

const lumenClient = Lumen({
  publicKey: '<<- your-api-key ->>',
  debug: true,
});

const run = async () => {
  await lumenClient.identify('user_identifier', {
    email: 'johndoe@gmail.com',
    first_name: 'john',
    last_name: 'doe',
    attributes: {
      hasCompletedKyc: true,
    },
  });

  await lumenClient.track('user_identifier', "Clicked 'Add Product To Cart'", {
    platform: 'web',
    properties: {
      sku: '102930',
    },
  });
};

run();
