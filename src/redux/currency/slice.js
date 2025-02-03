import { createSlice } from '@reduxjs/toolkit';
import { getBaseCurrency, getExchange } from './operations';

const initialState = {
  baseCurrency: '',
  exchangeInfo: null,
  isLoading: false,
  isError: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
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
      .addCase(getExchange.rejected, handleRejected);
  },
});

export const { setDefaultCurrency } = currencySlice.actions;

export default currencySlice.reducer;
