import axios from 'axios';
import {
  ExchangeCredentials,
  ExchangeResponse,
  ExchangeResult,
} from '../redux/currency/types';

const instance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data/',
  headers: { apikey: 'mJvBgVKrXjkYz1lklVQ4EFHQD5JZY7Jx' },
});

export const exchangeCurrency = async (
  credentials: ExchangeCredentials,
): Promise<ExchangeResult> => {
  const {
    data: { query, info, result },
  } = await instance.get<ExchangeResponse>(`/convert`, {
    params: credentials,
  });

  return { ...query, rate: info.rate, result };
};

export const latestRates = async (baseCurrency: string) => {
  const { data } = await instance.get(`/latest?symbols&base=${baseCurrency}`);
  return Object.entries(data.rates);
};
