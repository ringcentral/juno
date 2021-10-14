import 'focus-visible';

import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import React, { FunctionComponent, ReactNode } from 'react';

import {
  ThemeProvider as StyledThemeProvider,
  useTheme,
} from '../styled-components';
import createTheme from './createTheme';
import { RcThemeInput } from './theme.type';

export type RcThemeProviderProps = {
  /** custom theme */
  theme?: RcThemeInput;
  children?: ReactNode;
};

/**
 * sub theme provider,
 * that will use when you want use multiple theme in one app
 * that will user parent's theme when not set theme
 */
export const RcSubThemeProvider: FunctionComponent<RcThemeProviderProps> = ({
  theme: themeProp,
  children,
}) => {
  const parentTheme = useTheme();

  const isHaveParentRcTheme = parentTheme.palette?.content?.brand;

  const theme =
    !themeProp && isHaveParentRcTheme ? parentTheme : createTheme(themeProp);

  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <React.Fragment>{children}</React.Fragment>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

/**
 * theme wrapper, apply in root,
 * each app should always have one `RcThemeProvider` at root,
 * if you need multiple, use `RcSubThemeProvider` inside that `RcThemeProvider` */
export const RcThemeProvider: FunctionComponent<RcThemeProviderProps> = (
  props,
) => {
  return (
    <StylesProvider injectFirst>
      <RcSubThemeProvider {...props} />
    </StylesProvider>
  );
};
