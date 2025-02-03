import axios from 'axios';

type Credentials = {
  latitude: number;
  longitude: number;
};

export const getUserInfo = async ({ latitude, longitude }: Credentials) => {
  const apiKey = '723ad50eb1e941ef8cfada8cd17981e1';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}`;
  const { data } = await axios.get(urlPosition, {
    params: {
      key: apiKey,
      language: 'en',
    },
  });

  return data;
};
