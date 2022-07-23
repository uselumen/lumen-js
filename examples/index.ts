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
    device_id: '',
    attributes: {
      hasCompletedKyc: true,
    },
  });

  await lumenClient.track('user_identifier', "Clicked 'Add Product To Cart'", {
    platform: 'web',
    sku: '102930',
  });
};

run();
