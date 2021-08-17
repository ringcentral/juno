import { useTheme } from '@material-ui/core/styles';
/* eslint-disable import/no-duplicates */
import * as styledComponents from 'styled-components';

import {
  ThemedStyledComponentsModule,
  ThemeProps as StyledThemeProps,
  InterpolationValue,
  Keyframes,
  Interpolation,
  FlattenInterpolation,
  StyleSheetManager,
  ThemedStyledProps,
} from 'styled-components';

import { RcTheme } from './theme/theme.type';

type ThemeProps = StyledThemeProps<RcTheme>;

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  withTheme,
  ThemeProvider,
  ThemeConsumer,
} = (styledComponents as any) as ThemedStyledComponentsModule<RcTheme>;

type Dependencies = {
  dependencies?: (React.ComponentType | ((props: any) => JSX.Element))[];
};

const RcUseTheme = <T = RcTheme>() => useTheme<T>();

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme,
  ThemeConsumer,
  ThemeProps,
  Dependencies,
  InterpolationValue,
  Keyframes,
  FlattenInterpolation,
  Interpolation,
  RcUseTheme as useTheme,
  ThemedStyledProps,
  StyleSheetManager,
};

export default styled;
