import { Wave } from 'react-animated-text';
import { useEffect } from 'react';

import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import RatesList from '../components/RatesList/RatesList';

import { useAppDispatch, useAppSelector } from '../hooks';
import {
  selectBaseCurrency,
  selectFilteredRates,
} from '../redux/currency/selectors';
import { getLatestRates } from '../redux/currency/operations';

const Rates = () => {
  const isError = false;
  const filteredRates = useAppSelector(selectFilteredRates);
  const baseCurrency = useAppSelector(selectBaseCurrency);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getLatestRates(baseCurrency));
  // }, [dispatch]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${'UAH'} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />

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
