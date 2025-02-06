import axios from 'axios';
import { OpenCageCredentials, OpenCageResponse } from '../redux/currency/types';

export const getUserInfo = async ({
  latitude,
  longitude,
}: OpenCageCredentials): Promise<OpenCageResponse> => {
  const apiKey = '723ad50eb1e941ef8cfada8cd17981e1';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}`;
  const { data } = await axios.get<OpenCageResponse>(urlPosition, {
    params: {
      key: apiKey,
      language: 'en',
    },
  });

  return data;
};
