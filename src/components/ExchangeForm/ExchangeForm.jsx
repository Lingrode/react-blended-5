import { useDispatch } from 'react-redux';
import { RiExchangeDollarFill } from 'react-icons/ri';

import { getExchange } from '../../redux/currency/operations';

import styles from './ExchangeForm.module.css';

const ExchangeForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.search.value.trim();
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
