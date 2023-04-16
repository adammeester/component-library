import { style } from '@vanilla-extract/css';
import { theme } from '@/theme/Theme.css';

const { palette } = theme;

export const styles = {
  label: style({
    color: palette.primary.light,
    display: 'inline-block',
    verticalAlign: 'middle',
    padding: '1rem 0 0.4rem 0',
  }),
  textArea: style({
    fontFamily: 'inherit',
    fontSize: 'inherit',
  }),
};
