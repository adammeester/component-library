import { globalStyle, createGlobalTheme, style } from '@vanilla-extract/css';
import { theme } from './theme/Theme.css';
import { breakpoints } from './theme/breakpoints';
export const globalTheme = createGlobalTheme(':root', {
  color: {
    body: 'red',
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif',
  },
  maxWidth: '1400px',
  maxHeight: '100vh',
  backgroundColor: '#0e0e10',
  borderRadius: '6px',
  foregroundRgb: '0,0,0',
  fontMono:
    '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif',
});

export const styles = {
  page: style({
    color: theme.palette.primary.light,
    // display: 'flex',
    margin: '0 auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10rem',
    minHeight: '100%',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  }),
  background: style([
    {
      position: 'absolute',
      width: '100vw',
      height: '100%',
      content: '""',
      top: 0,
      /* background properties */
      // backgroundImage:
      //   'url(/wave-haikei-outline-5.svg), url(/wave-haikei-outline.svg), url(/wave-haikei-bg.svg)',
      backgroundImage:
        'url(/wave-haikei-outline-5.svg), url(/wave-haikei-bg.svg)',
      backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
      backgroundSize: 'cover, cover, cover',
      /*************************/
    },
    breakpoints.up('lg')({
      top: 5,
    }),
    breakpoints.up('xl')({
      top: -15,
    }),
  ]),
};

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});

globalStyle('html, body', {
  maxHeight: 'var(--maxHeight)',
  maxWidth: 'var(--maxWidth)',
  overflowX: 'hidden',
});

globalStyle('body', {
  color: 'rgb(var(--foreground-rgb))',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('h1', {
  fontWeight: 700,
  fontSize: '3rem',
});

globalStyle('h2', {
  fontWeight: 700,
  fontSize: '1.75rem',
});

globalStyle('input, label', {
  display: 'inline-block',
  verticalAlign: 'middle',
  padding: '1rem 0 1rem 0',
});

globalStyle('html, body', {
  maxWidth: '100vw',
  maxHeight: '100vh',
  margin: '0 auto',
  overflowX: 'hidden',
  backgroundColor: '#0e0e10',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\',\'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\',\'sans-serif\'',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});
