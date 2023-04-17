import { ReactNode } from 'react';

type ThemeProviderProps = {
    children: ReactNode;
    themeName?: 'light' | 'dark';
};
declare const ThemeProvider: ({ children, themeName, }: ThemeProviderProps) => JSX.Element;

export { ThemeProvider, ThemeProviderProps };
