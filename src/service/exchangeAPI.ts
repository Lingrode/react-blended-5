import axios from 'axios';
import {
  ExchangeCredentials,
  ExchangeRates,
  ExchangeResponse,
  ExchangeResult,
} from '../redux/currency/types';

const instance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data/',
  headers: { apikey: 'G90LZ6CFAckMkxh4NT0r9JtcRLjaFxMP' },
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

export const latestRates = async (
  baseCurrency: string,
): Promise<ExchangeRates> => {
  const { data } = await instance.get(`/latest?symbols&base=${baseCurrency}`);
  return data.rates;
};
