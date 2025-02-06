import React from 'react';
import styled from './Container.module.css';

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className={styled.container}>{children}</div>;
};

export default Container;
