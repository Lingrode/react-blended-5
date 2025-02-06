import { useEffect } from 'react';

import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import ExchangeForm from '../components/ExchangeForm/ExchangeForm';
import ExchangeInfo from '../components/ExchangeInfo/ExchangeInfo';
import Loader from '../components/Loader/Loader';

import { useAppDispatch, useAppSelector } from '../hooks';
import { getBaseCurrency } from '../redux/currency/operations';
import { setDefaultCurrency } from '../redux/currency/slice';
import {
  selectExchangeInfo,
  selectIsError,
  selectIsLoading,
} from '../redux/currency/selectors';

const Home = () => {
  const dispatch = useAppDispatch();
  const isError = useAppSelector(selectIsError);
  const isLoading = useAppSelector(selectIsLoading);
  const exchangeInfo = useAppSelector(selectExchangeInfo);

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

  if (isLoading) return <Loader />;

  return (
    <Section>
      <Container>
        <Heading info title="What currencies do you want to exchange?🙂" />

        <ExchangeForm />
        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
