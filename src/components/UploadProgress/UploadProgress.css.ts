import { style } from '@vanilla-extract/css';
import { theme } from '@/theme/Theme.css';

const { palette } = theme;

export const styles = {
  container: style({
    color: palette.primary.light,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }),
};
