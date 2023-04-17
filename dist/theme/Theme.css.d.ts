type MoreGGThemeType = {
    name: string;
    palette: PaletteOptions;
};
declare const colorOptions: {
    main: string;
    dark: string;
    light: string;
    accent: string;
    contrast: string;
};
declare const borderOptions: {
    main: string;
    secondary: string;
};
type ColorOptions = typeof colorOptions;
type BorderOptions = typeof borderOptions;
declare const paletteType: {
    primary: {
        main: string;
        dark: string;
        light: string;
        accent: string;
        contrast: string;
    };
    secondary: {
        main: string;
        dark: string;
        light: string;
        accent: string;
        contrast: string;
    };
    border: {
        main: string;
        secondary: string;
    };
};
type PaletteOptions = typeof paletteType;
declare const themeContract: {
    name: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    palette: {
        primary: {
            main: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dark: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            light: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            accent: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            contrast: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        secondary: {
            main: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dark: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            light: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            accent: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            contrast: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        border: {
            main: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            secondary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
};
declare const moreGGDarkTheme: string;
declare const theme: {
    name: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    palette: {
        primary: {
            main: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dark: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            light: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            accent: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            contrast: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        secondary: {
            main: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dark: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            light: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            accent: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            contrast: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        border: {
            main: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            secondary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
};

export { BorderOptions, ColorOptions, MoreGGThemeType, PaletteOptions, moreGGDarkTheme, theme, themeContract };
