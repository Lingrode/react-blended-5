import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../service/opencagedataApi';

export const getBaseCurrency = createAsyncThunk(
  'currency/getBaseCurrency',
  async (crd, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const { baseCurrency } = state.currency;

      if (baseCurrency) {
        return thunkApi.rejectWithValue('We already have base currency!');
      }

      const { results } = await getUserInfo(crd);
      return results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
