import React, { ReactNode } from 'react';
import { styles } from './ContentWrapper.css';

export type ContentWrapperProps = {
  children: ReactNode;
};

export const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <div className={styles.container}>{children}</div>;
};
