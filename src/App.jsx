import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Rates from './pages/Rates';
import Heading from './components/Heading/Heading';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rates" element={<Rates />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    // <Heading title="Just do it!" />
  );
};
