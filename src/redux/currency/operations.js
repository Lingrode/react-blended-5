import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../service/opencagedataApi';
import { exchangeCurrency } from '../../service';

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

export const getExchange = createAsyncThunk(
  'currency/getExchange',
  async (obj, thunkApi) => {
    try {
      const res = await exchangeCurrency(obj);
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
