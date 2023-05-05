import { style } from '@vanilla-extract/css';
import { palette } from '../../theme/Theme.css';

export const styles = {
  container: style({
    color: palette.primary.light,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }),
};
