import { RootState } from '../store';
import { CurrencyState, ExchangeInfoType } from './types';

export const selectBaseCurrency = (state: RootState): string =>
  state.currency.baseCurrency;
export const selectExchangeInfo = (state: RootState): ExchangeInfoType | null =>
  state.currency.exchangeInfo;
export const selectIsLoading = (state: RootState): boolean =>
  state.currency.isLoading;
export const selectIsError = (state: RootState) => state.currency.isError;
