import { createMuiTheme } from '@material-ui/core/styles';
import deepmerge from 'deepmerge';

import { DeepPartial } from '../typings';
import breakpoints from './assets/breakpoints.json';
import opacity from './assets/opacity.json';
import paletteDark from './assets/palette.dark.json';
import paletteLight from './assets/palette.light.json';
import radius from './assets/radius.json';
import shadows from './assets/shadows.json';
import shape from './assets/shape.json';
import transitions from './assets/transition.json';
import typography from './assets/typography.json';
import zIndex from './assets/zIndex.json';
import { RcPalette, RcTheme, RcThemeInput } from './theme.type';

// https://material-ui.com/customization/default-theme/
function createTheme(options: RcThemeInput = {}) {
  const {
    palette: paletteInput = {},
    typography: typographyInput = {},
    opacity: opacityInput = {},
    radius: radiusInput = {},
    zIndex: zIndexInput = {},
    breakpoints: breakpointsInput = {},
    shape: shapeInput = {},
    shadows: shadowsInput = [],
    transitions: transitionsInput = {},
  } = options;

  const _breakpoints =
    Object.keys(breakpointsInput).length > 0 ? breakpointsInput : breakpoints;

  const _shadows = shadowsInput?.length > 0 ? shadowsInput : shadows;

  const _palette = deepmerge(
    paletteInput['type'] === 'dark' ? paletteDark : paletteLight,
    paletteInput as RcPalette,
  );

  const theme: DeepPartial<RcTheme> = {
    ...options,
    spacing: 4,
    palette: _palette as any,
    typography: deepmerge(typography, typographyInput),
    opacity: deepmerge(opacity, opacityInput),
    radius: deepmerge(radius, radiusInput),
    shadows: _shadows,
    transitions: deepmerge(transitions, transitionsInput),
    zIndex: deepmerge(zIndex, zIndexInput),
    breakpoints: _breakpoints as any,
    shape: deepmerge(shape, shapeInput),
  };

  return createMuiTheme(theme as any) as RcTheme;
}

export default createTheme;
