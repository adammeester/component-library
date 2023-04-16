import React, { ReactNode } from 'react';
import { moreGGDarkTheme } from './Theme.css';

export type ThemeProviderProps = {
  children: ReactNode;
  themeName?: 'light' | 'dark';
};
export type ThemeName = 'light' | 'dark';

export const ThemeProvider = ({
  children,
  themeName = 'dark',
}: ThemeProviderProps) => {
  return <div className={moreGGDarkTheme}>{children}</div>;
};
