import { ReactElement } from 'react';

export type Props = {
  title: string | ReactElement;
  top?: boolean;
  bottom?: boolean;
  error?: boolean;
  info?: boolean;
  tag?: keyof JSX.IntrinsicElements;
};
