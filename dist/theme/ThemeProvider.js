import React from 'react';
import { moreGGDarkTheme } from './Theme.css.vanilla.js';

const themeMappings = {
  light: moreGGDarkTheme,
  dark: moreGGDarkTheme
};
const ThemeProvider = ({ children, themeName = "dark" }) => {
  return React.createElement("div", { className: themeMappings[themeName] }, children);
};

export { ThemeProvider };
