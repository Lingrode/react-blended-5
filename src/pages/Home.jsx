import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';

import { getBaseCurrency } from '../redux/currency/operations';
import { setDefaultCurrency } from '../redux/currency/slice';
import ExchangeForm from '../components/ExchangeForm/ExchangeForm';

const Home = () => {
  const isError = false;
  const dispatch = useDispatch();

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
    <Section>
      <Container>
        <Heading info title="What currencies do you want to exchange?🙂" />

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
        <ExchangeForm />
      </Container>
    </Section>
  );
};

export default Home;
