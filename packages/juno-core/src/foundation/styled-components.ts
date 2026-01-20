// @ts-ignore - styled-components 5.x bundled types
import type {
  FlattenInterpolation,
  Interpolation,
  InterpolationValue,
  Keyframes,
  ThemedStyledComponentsModule,
  ThemedStyledProps,
  ThemeProps as StyledThemeProps,
  // @ts-ignore
} from 'styled-components';
/* eslint-disable import/no-duplicates */
// @ts-ignore - styled-components 5.x type import workaround
import * as styledComponents from 'styled-components';

import { useTheme } from '@material-ui/core/styles';

import { RcTheme } from './theme/theme.type';

type ThemeProps = StyledThemeProps<RcTheme>;

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  withTheme,
  // @ts-ignore
  StyleSheetManager,
  ThemeProvider,
  ThemeConsumer,
} = styledComponents as any as ThemedStyledComponentsModule<RcTheme>;

type Dependencies = {
  dependencies?: (React.ComponentType | ((props: any) => JSX.Element))[];
};

const RcUseTheme = <T = RcTheme>() => useTheme<T>();

export {
  createGlobalStyle,
  css,
  keyframes,
  RcUseTheme as useTheme,
  StyleSheetManager,
  ThemeConsumer,
  ThemeProvider,
  withTheme,
};

export type {
  Dependencies,
  FlattenInterpolation,
  Interpolation,
  InterpolationValue,
  Keyframes,
  ThemedStyledProps,
  ThemeProps,
};

export default styled;
