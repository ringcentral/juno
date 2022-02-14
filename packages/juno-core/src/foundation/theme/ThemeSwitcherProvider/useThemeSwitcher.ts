import { useContext } from 'react';

import { RcThemeContext } from './ThemeContext';

export const useThemeSwitcher = () => {
  const context = useContext(RcThemeContext);

  if (!context) {
    throw new Error(
      'To use `useThemeSwitcher`, component must be within a RcThemeSwitcherProvider',
    );
  }
  return context;
};
