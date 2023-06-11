import React, { ReactNode } from 'react';
import { moreGGDarkTheme } from '../../theme/Theme.css';

export type ThemeProviderProps = {
  children: ReactNode;
  themeName?: 'light' | 'dark';
};

export type ThemeName = 'light' | 'dark';

const themeMappings: { [key in ThemeName]: string } = {
  light: moreGGDarkTheme,
  dark: moreGGDarkTheme,
};

export const ThemeProvider = ({
  children,
  themeName = 'dark',
}: ThemeProviderProps) => {
  return <div className={themeMappings[themeName]}>{children}</div>;
};
