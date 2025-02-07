import { ReactNode } from 'react';
import style from './GridItem.module.css';

type Props = {
  children: ReactNode;
};

const GridItem = ({ children }: Props) => {
  return <li className={style.item}>{children}</li>;
};

export default GridItem;
