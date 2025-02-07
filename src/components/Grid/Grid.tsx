import { ReactNode } from 'react';
import style from './Grid.module.css';

type Props = {
  children: ReactNode;
};

const Grid = ({ children }: Props) => {
  return <ul className={style.list}>{children}</ul>;
};

export default Grid;
