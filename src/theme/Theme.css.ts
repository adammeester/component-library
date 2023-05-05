import { createTheme } from '@vanilla-extract/css';
import { createThemeContract } from '@vanilla-extract/css';
import { paletteColours } from './palette';

export type MoreGGThemeType = {
  name: string;
  palette: PaletteOptions;
};

const colorOptions = {
  main: '',
  dark: '',
  light: '',
  accent: '',
  contrast: '',
};
const borderOptions = {
  main: '',
  secondary: '',
};
export type ColorOptions = typeof colorOptions;
export type BorderOptions = typeof borderOptions;

const paletteType = {
  primary: colorOptions,
  secondary: colorOptions,
  border: borderOptions,
};

export type PaletteOptions = typeof paletteType;
export const themeContract = createThemeContract({
  name: 'default',
  palette: paletteType,
});

const tokens: MoreGGThemeType = {
  name: 'dark',
  palette: paletteColours,
};

export const moreGGDarkTheme = createTheme(themeContract, tokens);

export const theme = { ...themeContract };

export const palette = themeContract.palette;
