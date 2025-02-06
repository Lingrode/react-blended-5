export type Props = {
  title: string;
  top?: boolean;
  bottom?: boolean;
  error?: boolean;
  info?: boolean;
  tag?: keyof JSX.IntrinsicElements;
};
