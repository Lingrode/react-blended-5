import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Rates from './pages/Rates';
import Header from './components/Header/Header';

export const App = () => {
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
