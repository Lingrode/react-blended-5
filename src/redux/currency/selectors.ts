import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ExchangeInfoType } from './types';
import { selectFilter } from '../filter/selectors';

export const selectBaseCurrency = (state: RootState): string =>
  state.currency.baseCurrency;
export const selectExchangeInfo = (state: RootState): ExchangeInfoType | null =>
  state.currency.exchangeInfo;
export const selectIsLoading = (state: RootState): boolean =>
  state.currency.isLoading;
export const selectIsError = (state: RootState) => state.currency.isError;
export const selectRates = (state: RootState) => state.currency.rates;

export const selectFilteredRates = createSelector(
  [selectRates, selectBaseCurrency, selectFilter],
  (rates, baseCurrency, filter) => {
    return rates
      .filter(
        ([key]) =>
          key !== baseCurrency &&
          key.toLowerCase().includes(filter.toLowerCase()),
      )
      .map(([key, value]) => ({
        key,
        value: (1 / Number(value)).toFixed(2),
      }));
  },
);
