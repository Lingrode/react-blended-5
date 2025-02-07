import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import currencySlice from './currency/slice';
import filterSlice from './filter/slice';

const persistConfig = {
  key: 'currency',
  storage,
  whitelist: ['exchangeInfo', 'baseCurrency'],
};

const persistedReducer = persistReducer(persistConfig, currencySlice);

export const store = configureStore({
  reducer: {
    currency: persistedReducer,
    filter: filterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
