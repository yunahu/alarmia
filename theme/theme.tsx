import { createContext, PropsWithChildren, useContext, useState } from 'react';

import colorsThemes, {
  ColorTheme,
  ColorType,
  DEFAULT_COLOR_TYPE,
} from '@/theme/colors';

export interface Theme {
  colors: ColorTheme;
}

interface ThemeOptions {
  colorType?: ColorType;
}

interface ThemeContextType {
  theme: Theme;
  updateTheme: (themeOptions: ThemeOptions) => void;
}

const buildTheme = ({ colorType }: ThemeOptions): Theme => ({
  colors: colorsThemes[colorType ?? DEFAULT_COLOR_TYPE],
});

export const ThemeContext = createContext<ThemeContextType>({
  theme: buildTheme({}),
  updateTheme: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(buildTheme({}));

  const updateTheme = (themeOptions: ThemeOptions) =>
    setTheme(buildTheme(themeOptions));

  return <ThemeContext value={{ theme, updateTheme }}>{children}</ThemeContext>;
};

export const useTheme = () => useContext(ThemeContext);
