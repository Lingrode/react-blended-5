import style from './Section.module.css';

type Props = {
  children: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return <section className={style.section}>{children}</section>;
};

export default Section;
