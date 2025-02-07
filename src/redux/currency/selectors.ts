import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ExchangeInfoType } from './types';

export const selectBaseCurrency = (state: RootState): string =>
  state.currency.baseCurrency;
export const selectExchangeInfo = (state: RootState): ExchangeInfoType | null =>
  state.currency.exchangeInfo;
export const selectIsLoading = (state: RootState): boolean =>
  state.currency.isLoading;
export const selectIsError = (state: RootState) => state.currency.isError;
export const selectRates = (state: RootState) => state.currency.rates;

export const selectFilteredRates = createSelector(
  [selectRates, selectBaseCurrency],
  (rates, baseCurrency) => {
    return Object.entries(rates)
      .filter(([key]) => key !== baseCurrency)
      .map(([key, value]) => ({ key, value: (1 / Number(value)).toFixed(2) }));
  },
);
