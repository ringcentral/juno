import 'focus-visible';

import React, {
  FunctionComponent,
  ReactNode,
  createContext,
  useContext,
} from 'react';

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

type SubThemeProviderProps = {
  /** custom theme */
  theme?: RcThemeInput;
  children?: ReactNode;
};

type RootThemeProviderProps = {
  /** prefix the mui global class */
  prefixGlobalClass?: string;
} & SubThemeProviderProps;

export type RcThemeProviderProps = RootThemeProviderProps;

const NestedThemeContext = createContext(false);

/**
 * sub theme provider,
 * that will use when you want use multiple theme in one app
 * that will user parent's theme when not set theme
 */
const SubThemeProvider: FunctionComponent<SubThemeProviderProps> = ({
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
 * each app should always have one `RootThemeProvider` at root,
 * if you need multiple, use `SubThemeProvider` inside that `RootThemeProvider`
 */
const RootThemeProvider: FunctionComponent<RootThemeProviderProps> = (
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
      <SubThemeProvider {...rest} />
    </StylesProvider>
  );
};

/**
 * theme wrapper, each app should always have one `RcThemeProvider` at root
 *
 * if you need multiple theme,
 * you can apply another `RcThemeProvider` inside root `RcThemeProvider`.
 *
 * `RcThemeProvider` can unlimited nest
 */
export const RcThemeProvider: FunctionComponent<RcThemeProviderProps> = (
  props,
) => {
  const isSubProvider = useContext(NestedThemeContext);
  const ThemeProvider = isSubProvider ? SubThemeProvider : RootThemeProvider;

  return (
    <NestedThemeContext.Provider value>
      <ThemeProvider {...props} />
    </NestedThemeContext.Provider>
  );
};
