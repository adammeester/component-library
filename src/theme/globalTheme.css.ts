/* eslint-disable quotes */
import { createGlobalTheme } from '@vanilla-extract/css';

export const globalTheme = createGlobalTheme(':root', {
  color: {
    body: 'red',
  },
  font: {
    body: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  },
  maxWidth: '1400px',
  maxHeight: '100vh',
  backgroundColor: '#0e0e10',
  borderRadius: '6px',
  foregroundRgb: '0,0,0',
  fontMono: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
});
