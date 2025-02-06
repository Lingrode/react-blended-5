export type CurrencyState = {
  baseCurrency: string;
  exchangeInfo: null | ExchangeInfoType;
  isLoading: boolean;
  isError: null | undefined | string;
};

export type ExchangeInfoType = {
  to: string;
  from: string;
  amount: number;
  rate: number;
  result: number;
};

export type OpenCageResponse = {
  results: {
    annotations: {
      currency: {
        iso_code: string;
      };
    };
  }[];
};

export type ExchangeResponse = {
  info: { rate: number };
  query: {
    amount: number;
    from: string;
    to: string;
  };
  result: number;
};

export type ExchangeResult = {
  rate: number;
  amount: number;
  from: string;
  to: string;
  result: number;
};

export type OpenCageCredentials = {
  latitude: number;
  longitude: number;
};

export type ExchangeCredentials = {
  to: string;
  from: string;
  amount: string;
};
