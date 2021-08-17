import React, { FunctionComponent, isValidElement, useState } from 'react';

import { RcThemeInput } from '../theme.type';
import darkTheme from './rcDark.json';
import highContrast from './rcHighContrast.json';
import { RcThemeContext, RcThemeSwitcherProviderProps } from './ThemeContext';

export const RcDefaultDarkTheme = darkTheme as RcThemeInput;
export const RcDefaultHighContrastTheme = highContrast as RcThemeInput;

export const RcThemeSwitcherDefaultTheme = {
  defaultTheme: 'light',
  themeMap: {
    light: {},
  },
};

export const RcThemeSwitcherProvider: FunctionComponent<RcThemeSwitcherProviderProps> = ({
  children,
  defaultTheme = RcThemeSwitcherDefaultTheme.defaultTheme,
  themeMap = RcThemeSwitcherDefaultTheme.themeMap,
}) => {
  const [currentTheme, setTheme] = useState(defaultTheme);

  return (
    <RcThemeContext.Provider
      value={{
        defaultTheme,
        themeMap,
        theme: currentTheme,
        setTheme,
      }}
    >
      <RcThemeContext.Consumer>
        {({ theme, themeMap }) => {
          Object.keys(themeMap!).forEach((key) => {
            document.body.removeAttribute(key);
          });
          document.body.setAttribute(theme!, '');

          if (isValidElement(children)) {
            const _children = React.cloneElement(children, {
              theme: themeMap![theme!],
            });
            return _children;
          }
          throw new Error(
            'RcThemeSwitcherProvider can only have one children with theme props',
          );
        }}
      </RcThemeContext.Consumer>
    </RcThemeContext.Provider>
  );
};
