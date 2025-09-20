interface ColorPalette {
  primary: string;
}

const sharedColors = {
  black: '#000000',
  white: '#D3D9DC',
  darkerGrey: '#121212',
  darkGrey: '#282828',
  blue: '#5C89D6',
  green: '#306844',
  darkViolet: '#332940',
  violet: '#BB86FC',
};

type SharedColors = typeof sharedColors;

export type ColorTheme = ColorPalette & SharedColors;

interface ColorThemes {
  blue: ColorTheme;
  green: ColorTheme;
  violet: ColorTheme;
}

const colorsThemes: ColorThemes = {
  blue: {
    primary: sharedColors.blue,
    ...sharedColors,
  },
  green: {
    primary: sharedColors.green,
    ...sharedColors,
  },
  violet: {
    primary: sharedColors.violet,
    ...sharedColors,
  },
};

export type ColorType = keyof typeof colorsThemes;

export const DEFAULT_COLOR_TYPE: ColorType = 'blue';

export default colorsThemes;
