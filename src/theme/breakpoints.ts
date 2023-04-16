import { StyleRule } from '@vanilla-extract/css';

type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const screenWidths = {
  // sizes are in px
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
  xxl: 1920,
} as const;

type BreakpointCondition = 'min' | 'max';

const createMediaQuery =
  (size: ScreenSize, direction: BreakpointCondition) => (style: StyleRule) => ({
    '@media': {
      [`screen and (${direction}-width: ${screenWidths[size]}px)`]: style,
    },
  });

const createCombinedMediaQuery =
  (min: ScreenSize, max: ScreenSize) => (style: StyleRule) => ({
    '@media': {
      [`screen and (min-width: ${screenWidths[min]}px) and (max-width: ${screenWidths[max]}px)`]:
        style,
    },
  });

export const breakpoints = {
  up: (size: ScreenSize) => createMediaQuery(size, 'min'),
  down: (size: ScreenSize) => createMediaQuery(size, 'max'),
  between: (min: ScreenSize, max: ScreenSize) =>
    createCombinedMediaQuery(min, max),
};
