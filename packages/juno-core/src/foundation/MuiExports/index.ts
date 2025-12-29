/**
 * MUI Foundation Re-exports
 *
 * These are direct re-exports of MUI hooks, utilities, and style functions.
 * They are prefixed with "Mui" or "mui" to indicate they are raw MUI APIs,
 * not JUNO wrappers.
 *
 * Usage:
 * ```tsx
 * import { MuiUseMediaQuery, muiDarken, muiLighten } from '@ringcentral/juno';
 * ```
 */

// ============================================
// Hooks
// ============================================

export { default as MuiUseMediaQuery } from '@material-ui/core/useMediaQuery';
export { useIsFocusVisible as MuiUseIsFocusVisible } from '@material-ui/core/utils';

// ============================================
// Styles / Theme
// ============================================

export {
  createTheme as MuiCreateTheme,
  useTheme as MuiUseTheme,
  makeStyles as MuiMakeStyles,
  withStyles as MuiWithStyles,
} from '@material-ui/core/styles';

// Color Manipulation utilities (lowercase prefix to indicate utility functions)
export {
  darken as muiDarken,
  lighten as muiLighten,
  alpha as muiAlpha,
  fade as muiFade,
  emphasize as muiEmphasize,
  getContrastRatio as muiGetContrastRatio,
  getLuminance as muiGetLuminance,
  hexToRgb as muiHexToRgb,
  rgbToHex as muiRgbToHex,
  hslToRgb as muiHslToRgb,
  decomposeColor as muiDecomposeColor,
  recomposeColor as muiRecomposeColor,
} from '@material-ui/core/styles';

// Transitions
export {
  duration as MuiTransitionDuration,
  easing as MuiTransitionEasing,
} from '@material-ui/core/styles/transitions';

// ============================================
// StylesProvider (for advanced use cases like DetachedWindow)
// ============================================

export {
  StylesProvider as MuiStylesProvider,
  createGenerateClassName as MuiCreateGenerateClassName,
  jssPreset as MuiJssPreset,
} from '@material-ui/styles';

// ============================================
// Type exports
// ============================================

export type {
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions,
} from '@material-ui/core/styles';
