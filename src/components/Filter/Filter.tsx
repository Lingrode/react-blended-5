import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectFilter } from '../../redux/filter/selectors';
import { setFilter } from '../../redux/filter/slice';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
      value={filter}
      onChange={handleChange}
    />
  );
};

export default Filter;
