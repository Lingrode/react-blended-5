import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/Header/Header';
import Home from './pages/Home';
import Rates from './pages/Rates';

import { useAppDispatch } from './hooks';
import { getBaseCurrency } from './redux/currency/operations';
import { setDefaultCurrency } from './redux/currency/slice';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async pos => {
        const crd = pos.coords;
        await dispatch(getBaseCurrency(crd));
      },
      error => {
        console.log('Unable to get your position:', error.message);
        dispatch(setDefaultCurrency('USD'));
      },
    );
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="rates" element={<Rates />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
