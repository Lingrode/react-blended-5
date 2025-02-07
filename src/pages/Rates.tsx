import { Wave } from 'react-animated-text';

import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import { useAppSelector } from '../hooks';
import { selectFilteredRates } from '../redux/currency/selectors';
import RatesList from '../components/RatesList/RatesList';

const Rates = () => {
  const isError = false;
  const filteredRates = useAppSelector(selectFilteredRates);

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
