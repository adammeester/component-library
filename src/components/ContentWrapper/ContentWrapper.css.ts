import { style } from '@vanilla-extract/css';
import { globalTheme } from '../../App.css';

export const styles = {
  container: style({
    margin: '0 auto',
    justifyContent: 'center',
    padding: '0rem 2rem 0rem 2rem',
    maxHeight: globalTheme.maxHeight,
    maxWidth: globalTheme.maxWidth,
  }),
};
