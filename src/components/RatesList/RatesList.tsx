import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

import styles from './RatesList.module.css';

type ExchangeRates = {
  [currencyCode: string]: number;
};

type Props = {
  rates: ExchangeRates;
};

const RatesList = ({ rates }: Props) => {
  return (
    <Grid>
      {rates.map(({ key, value }) => (
        <GridItem key={key}>
          <p className={styles.text}>
            1 {key} = {value}
          </p>
        </GridItem>
      ))}
    </Grid>
  );
};
export default RatesList;
