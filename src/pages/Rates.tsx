import { Wave } from 'react-animated-text';
import { useEffect } from 'react';

import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import RatesList from '../components/RatesList/RatesList';
import Filter from '../components/Filter/Filter';
import Loader from '../components/Loader/Loader';

import { useAppDispatch, useAppSelector } from '../hooks';
import {
  selectBaseCurrency,
  selectFilteredRates,
  selectIsError,
  selectIsLoading,
} from '../redux/currency/selectors';
import { getLatestRates } from '../redux/currency/operations';

const Rates = () => {
  const dispatch = useAppDispatch();
  const filteredRates = useAppSelector(selectFilteredRates);
  const baseCurrency = useAppSelector(selectBaseCurrency);
  const isError = useAppSelector(selectIsError);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getLatestRates(baseCurrency));
  }, [dispatch, baseCurrency]);

  if (isLoading) return <Loader />;

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />

        <Filter />

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}

        {filteredRates.length > 0 && <RatesList rates={filteredRates} />}
      </Container>
    </Section>
  );
};

export default Rates;
