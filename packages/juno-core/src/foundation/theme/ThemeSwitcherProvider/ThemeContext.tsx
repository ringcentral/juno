import React from 'react';

import { RcThemeInput } from '../theme.type';

export type RcThemeSwitcherProviderProps = {
  defaultTheme?: string;
  themeMap?: Record<any, RcThemeInput>;
};

export type ThemeContextValue = {
  theme?: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
} & RcThemeSwitcherProviderProps;

export const RcThemeContext = React.createContext<ThemeContextValue>({});
