import { style } from '@vanilla-extract/css';
import { theme } from '../../theme';
import { grow } from '../../keyframes/keyframes.css';

export const styles = {
  container: style({
    flexWrap: 'nowrap',
    position: 'relative',
    padding: '0.5rem',
    margin: '1rem',
    height: '15rem',
    width: '20rem',
    borderRadius: '0.3rem',
    cursor: 'pointer',
    background: theme.palette.secondary.main,
    boxShadow: `0.13rem 0.3rem 0.9375rem 0rem ${theme.palette.primary.dark}`,
    ':hover': {
      animation: `${grow} 0.2s ease-in-out forwards`,
    },
  }),
};
