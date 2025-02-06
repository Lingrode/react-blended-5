import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUserInfo } from '../../service/opencagedataApi';
import { exchangeCurrency } from '../../service';

import {
  ExchangeCredentials,
  ExchangeResult,
  OpenCageCredentials,
} from './types';
import { RootState } from '../store';

export const getBaseCurrency = createAsyncThunk<
  string,
  OpenCageCredentials,
  { rejectValue: string; state: RootState }
>('currency/getBaseCurrency', async (crd, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const { baseCurrency } = state.currency;

    if (baseCurrency) {
      return thunkApi.rejectWithValue('We already have base currency!');
    }

    const { results } = await getUserInfo(crd);
    return results[0].annotations.currency.iso_code;
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const getExchange = createAsyncThunk<
  ExchangeResult,
  ExchangeCredentials,
  { rejectValue: string }
>('currency/getExchange', async (obj, { rejectWithValue }) => {
  try {
    const res = await exchangeCurrency(obj);
    return res;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
