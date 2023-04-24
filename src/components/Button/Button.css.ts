import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { grow } from '../../keyframes/keyframes.css';
import { theme } from '../../theme/Theme.css';

const { palette } = theme;

export const styles = {
  button: style({
    padding: '0.7rem',
    borderRadius: '0.3rem',
    color: palette.primary.light,
    fontSize: '1.5rem',
    cursor: 'pointer',
    fontWeight: 700,
    backgroundColor: palette.primary.accent,
    // textShadow: `0rem 0.1rem 0.1rem ${palette.primary.dark}`,
    // boxShadow: `0.13rem 0.3rem 0.9375rem 0rem ${palette.primary.dark}`,
    // ':hover': {
    //   animation: `${grow} 0.2s ease-in-out forwards`,
    //   boxShadow: `0.3rem 0.438rem 0.9375rem 0rem ${palette.primary.dark}`,
    // },
  }),
  icon: style({
    background: 'none',
    border: 'none',
    padding: 0,
    minWidth: 0,
  }),
  buttonContent: style({
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
};

const hoverEffect = style({
  ':hover': {
    animation: `${grow} 0.2s ease-in-out forwards`,
  },
});

export const hoverEffects = recipe({
  variants: {
    enabled: {
      true: hoverEffect,
      false: '',
    },
  },
});

export const variants = styleVariants({
  primary: [styles.button],
  secondary: [styles.button, { backgroundColor: palette.primary.accent }],
  action: [styles.button, { backgroundColor: palette.secondary.contrast }],
  icon: [styles.button, styles.icon],
});

globalStyle(`${styles.icon} svg`, {
  verticalAlign: 'middle',
});

globalStyle(`${styles.buttonContent} img`, {
  marginRight: '0.2rem',
});
