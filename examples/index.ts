import Lumen from '../src/index';

const lumenClient = Lumen({
  publicKey: '<<- your-api-key ->>',
});

const run = async () => {
  const idResponse = await lumenClient.identify('<<- unique-identifier ->>', {
    email: 'johndoe@gmail.com',
    first_name: 'john',
    last_name: 'doe',
    attributes: {
      hasCompletedKyc: true,
    },
  });

  console.log({ idResponse });

  const trackResponse = await lumenClient.track('Product Clicked', {
    device_id: '098909',
    platform: 'android',
    properties: {
      sku: '102930',
    },
  });

  console.log({ trackResponse });
};

run();
