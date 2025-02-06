import clsx from 'clsx';

import type { Props } from './Heading.types';
import styles from './Heading.module.css';

const Heading = ({
  title,
  top,
  bottom,
  error,
  info,
  tag: Tag = 'h2',
}: Props) => {
  return (
    <Tag
      className={clsx(styles.title, {
        [styles.top]: top,
        [styles.bottom]: bottom,
        [styles.error]: error,
        [styles.info]: info,
      })}
    >
      {title}
    </Tag>
  );
};
export default Heading;
