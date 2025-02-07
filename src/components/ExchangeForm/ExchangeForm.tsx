import { RiExchangeDollarFill } from 'react-icons/ri';

import { getExchange } from '../../redux/currency/operations';
import { useAppDispatch } from '../../hooks';

import styles from './ExchangeForm.module.css';
import { FormEvent } from 'react';

const ExchangeForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputValue = (
      form.elements.namedItem('search') as HTMLInputElement
    ).value.trim();
    const [amount, from, , to] = inputValue.split(' ');

    dispatch(
      getExchange({
        to,
        from,
        amount,
      }),
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        name="search"
        title="Request format 15 USD in UAH"
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        className={styles.input}
      />
    </form>
  );
};

export default ExchangeForm;
