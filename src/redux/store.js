import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import currencySlice from './currency/slice';

const persistConfig = {
  key: 'currency',
  storage,
};

const persistedReducer = persistReducer(persistConfig, currencySlice);

export const store = configureStore({
  reducer: {
    currency: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
