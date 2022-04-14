import 'focus-visible';

import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
} from 'react';

import {
  createGenerateClassName,
  MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';

import { useResultRef } from '../hooks';
import {
  getWebKit154Theme,
  GlobalFixWebKitStyle,
  isWebKit154,
} from '../isWebKit154';
import {
  ThemeProvider as StyledThemeProvider,
  useTheme,
} from '../styled-components';
import createTheme from './createTheme';
import { RcThemeInput } from './theme.type';

type SubThemeProviderProps = {
  /** custom theme */
  theme?: RcThemeInput;
  // TODO: that should be remove after safari 16.x
  /**
   * workaround for fix safari 15.4~.9 bug
   *
   * use for when your environment need that fix but userAgent not have safari
   */
  fixWebKit154?: boolean;
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
  fixWebKit154,
}) => {
  const parentTheme = useTheme();

  const isHaveParentRcTheme = parentTheme.palette?.content?.brand;

  // TODO: can be remove after safari fix that bug, maybe after v16
  const theme = getWebKit154Theme(
    !themeProp && isHaveParentRcTheme ? parentTheme : createTheme(themeProp),
    fixWebKit154,
  );

  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <>
          {(fixWebKit154 ?? isWebKit154) && <GlobalFixWebKitStyle />}
          {children}
        </>
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
