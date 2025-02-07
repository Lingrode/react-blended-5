import Select from 'react-select';

import { useAppDispatch } from '../../hooks';
import { setDefaultCurrency } from '../../redux/currency/slice';
import symbols from './symbols.json';

import styles from './SelectRates.module.css';

import './ReactSelect.css';

type Props = {
  baseCurrency: string;
};

const SelectRates = ({ baseCurrency }: Props) => {
  const dispatch = useAppDispatch();

  const handleChange = (
    selectedOption: { value: string; label: string } | null,
  ) => {
    if (selectedOption) {
      dispatch(setDefaultCurrency(selectedOption.value));
    }
  };

  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency: {baseCurrency}</p>{" "}
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        value={{
          label: baseCurrency,
          value: baseCurrency,
        }}
        options={symbols}
        isSearchable
        onChange={handleChange}
      />
    </div>
  );
};

export default SelectRates;
