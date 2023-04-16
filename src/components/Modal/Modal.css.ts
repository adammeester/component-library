import { style } from '@vanilla-extract/css';
import { fadeIn } from '../../keyframes/keyframes.css';
import { theme } from '../../theme/Theme.css';

const { palette } = theme;

export const styles = {
  modal: style({
    position: 'fixed',
    zIndex: 400,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animationName: fadeIn,
    animationDuration: '0.3s',
  }),
  content: style({
    padding: '1rem',
    backgroundColor: palette.primary.main,
    borderRadius: '5px',
    border: `0.2rem solid ${palette.border.main}`,
  }),
  header: style({
    display: 'flex',
    padding: '10px',
    justifyContent: 'space-between',
  }),
  title: style({
    fontWeight: 700,
    color: palette.primary.light,
    fontSize: '1.5rem',
  }),
  body: style({
    padding: '10px',
    borderTop: '1px solid white',
  }),
  footer: style({}),
  closeButton: style({
    color: palette.primary.light,
    cursor: 'pointer',
    ':hover': {
      animation: 'fadeIn 5s',
      transform: 'scale(1.10)',
    },
    boxShadow: 'none',
    fontSize: '1.75rem',
  }),
  closeIcon: style({
    marginBottom: '0.3rem',
  }),
};
