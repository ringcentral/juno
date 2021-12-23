import 'focus-visible';

import React, { FunctionComponent, ReactNode } from 'react';

import {
  MuiThemeProvider,
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import {
  ThemeProvider as StyledThemeProvider,
  useTheme,
} from '../styled-components';
import createTheme from './createTheme';
import { RcThemeInput } from './theme.type';
import { useResultRef } from '../hooks';

export type RcSubThemeProviderProps = {
  /** custom theme */
  theme?: RcThemeInput;
  children?: ReactNode;
};

export type RcThemeProviderProps = {
  /** prefix the mui global class */
  prefixGlobalClass?: string;
} & RcSubThemeProviderProps;

/**
 * sub theme provider,
 * that will use when you want use multiple theme in one app
 * that will user parent's theme when not set theme
 */
export const RcSubThemeProvider: FunctionComponent<RcSubThemeProviderProps> = ({
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
  const { prefixGlobalClass, ...rest } = props;

  // cannot pass `generateClassName: undefine`
  // otherwise global class will be random
  const stylesProviderProps = useResultRef(() => {
    return prefixGlobalClass
      ? {
          generateClassName: createGenerateClassName({
            seed: prefixGlobalClass,
          }),
        }
      : {};
  });

  return (
    <StylesProvider injectFirst {...stylesProviderProps.current}>
      <RcSubThemeProvider {...rest} />
    </StylesProvider>
  );
};
