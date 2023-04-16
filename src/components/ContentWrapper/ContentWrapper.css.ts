import { globalTheme } from '@/pages/app.css';
import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    margin: '0 auto',
    justifyContent: 'center',
    padding: '0rem 2rem 0rem 2rem',
    maxHeight: globalTheme.maxHeight,
    maxWidth: globalTheme.maxWidth,
  }),
};
