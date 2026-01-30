import type { ComponentType, ReactNode } from 'react';

import type {
  FlattenInterpolation,
  Interpolation,
  InterpolationValue,
  Keyframes,
  ThemedCssFunction,
  ThemedStyledComponentsModule,
  ThemedStyledInterface,
  ThemedStyledProps,
  ThemeProps as StyledThemeProps,
} from 'styled-components';
/* eslint-disable import/no-duplicates */
import * as styledComponents from 'styled-components';

import { useTheme } from '@material-ui/core/styles';

import { RcTheme } from './theme/theme.type';

type ThemeProps = StyledThemeProps<RcTheme>;

const styledModule =
  styledComponents as unknown as ThemedStyledComponentsModule<RcTheme>;
const styled: ThemedStyledInterface<RcTheme> = styledModule.default;
const css: ThemedCssFunction<RcTheme> = styledModule.css;
const keyframes: typeof styledModule.keyframes = styledModule.keyframes;
const createGlobalStyle: typeof styledModule.createGlobalStyle =
  styledModule.createGlobalStyle;
const withTheme: typeof styledModule.withTheme = styledModule.withTheme;
const StyleSheetManager = (
  styledComponents as typeof styledComponents & {
    StyleSheetManager: ComponentType<{ children?: ReactNode }>;
  }
).StyleSheetManager;
const ThemeProvider: typeof styledModule.ThemeProvider =
  styledModule.ThemeProvider;
const ThemeConsumer: typeof styledModule.ThemeConsumer =
  styledModule.ThemeConsumer;

type Dependencies = {
  dependencies?: (ComponentType | ((props: unknown) => JSX.Element))[];
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
