import { style } from '@vanilla-extract/css';
import { theme } from '../../theme/Theme.css';

const { palette } = theme;

export const styles = {
  input: style({
    display: 'inline-block',
    verticalAlign: 'middle',
    padding: '0.4rem 0 0.4rem 0',
    borderRadius: '0.3rem',
    fontSize: 'inherit',
  }),
  label: style({
    color: palette.primary.light,
    display: 'inline-block',
    verticalAlign: 'middle',
    padding: '1rem 0 0.4rem 0',
    fontWeight: 600,
    textShadow: '0rem 0.3rem 0.3rem #000000',
  }),
  fileUpload: style({
    position: 'relative',
    // width: 'fit-content',
    alignContent: 'center',
    margin: '0 auto',
    textAlign: 'center',
    color: palette.primary.light,
    borderRadius: '0.3rem',
  }),
  fileInput: style({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    opacity: 0,
    cursor: 'pointer',
  }),

  uploadImage: style({
    width: '100%',
    textAlign: 'center',
    fontSize: '4rem',
  }),
};
