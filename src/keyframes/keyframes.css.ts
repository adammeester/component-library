import { keyframes } from '@vanilla-extract/css';

export const grow = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '100%': {
    transform: 'scale(1.03)',
  },
});

export const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const slideIn = keyframes({
  '0%': {
    transform: 'translateX(0)',
  },
  '100%': {
    transform: 'translateX(20%)',
  },
});

export const rotate = keyframes({
  '100%': {
    transform: 'rotate(0deg)',
  },
  '0%': {
    transform: 'rotate(360deg)',
  },
});

export const glow = keyframes({
  '0%': {
    boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.5)',
  },
  '70%': {
    boxShadow: '0 0 0 10px rgba(255, 255, 255, 0)',
  },
  '100%': {
    boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)',
  },
});
