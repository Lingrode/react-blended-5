import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBaseCurrency, getExchange, getLatestRates } from './operations';
import { CurrencyState } from './types';

const initialState: CurrencyState = {
  baseCurrency: '',
  exchangeInfo: null,
  isLoading: false,
  isError: null,
  rates: [],
};

const handlePending = (state: Pick<CurrencyState, 'isLoading'>) => {
  state.isLoading = true;
};

const handleRejected = (
  state: Pick<CurrencyState, 'isLoading' | 'isError'>,
  action: PayloadAction<string | undefined>,
) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setDefaultCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(getExchange.pending, handlePending)
      .addCase(getExchange.fulfilled, (state, action) => {
        state.exchangeInfo = action.payload;
        state.isLoading = false;
      })
      .addCase(getExchange.rejected, handleRejected)
      .addCase(getLatestRates.pending, handlePending)
      .addCase(getLatestRates.fulfilled, (state, action) => {
        state.rates = Object.entries(action.payload);
        state.isLoading = false;
      })
      .addCase(getLatestRates.rejected, handleRejected);
  },
});

export const { setDefaultCurrency } = currencySlice.actions;

export default currencySlice.reducer;
