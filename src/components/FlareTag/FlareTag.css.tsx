import { style } from '@vanilla-extract/css';
import { palette } from '../../theme';

export const styles = {
  container: style({
    backgroundColor: palette.primary.contrast,
    height: '1.5rem',
    width: '4rem',
    position: 'absolute',
    borderRadius: '0.3rem',
    textAlign: 'center',
    fontWeight: 700,
    transform: 'rotate(15deg)',
    right: -16,
    top: -10,
    textShadow: `0rem 0.1rem 0.1rem ${palette.primary.dark}`,
    boxShadow: `0.13rem 0.3rem 0.9375rem 0rem ${palette.primary.dark}`,
  }),
};
