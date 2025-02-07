import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import ExchangeForm from '../components/ExchangeForm/ExchangeForm';
import ExchangeInfo from '../components/ExchangeInfo/ExchangeInfo';
import Loader from '../components/Loader/Loader';

import { useAppSelector } from '../hooks';
import {
  selectExchangeInfo,
  selectIsError,
  selectIsLoading,
} from '../redux/currency/selectors';

const Home = () => {
  const isError = useAppSelector(selectIsError);
  const isLoading = useAppSelector(selectIsLoading);
  const exchangeInfo = useAppSelector(selectExchangeInfo);

  if (isLoading) return <Loader />;

  return (
    <Section>
      <Container>
        <ExchangeForm />

        {!exchangeInfo && !isError && (
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}

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
