import fetch from 'cross-fetch';

export const getIpAddress = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json', {});

    const json = await response.json();
    if (!response.ok) {
      throw Error('Error getting IP address');
    }
    if (json) {
      const ip = json.ip;
      return ip;
    }
  } catch (e) {
    return '';
  }
};
