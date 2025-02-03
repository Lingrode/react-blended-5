import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { useDispatch } from 'react-redux';
import { getExchange } from '../../redux/currency/operations';

const ExchangeForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.search.value.trim();
    const [amount, from, , to] = inputValue.split(' ');
    const exchangeObj = {
      to,
      from,
      amount,
    };
    dispatch(
      getExchange({
        to,
        from,
        amount,
      }),
    );
    console.log(exchangeObj);
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
