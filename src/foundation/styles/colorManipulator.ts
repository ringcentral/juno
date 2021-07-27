import {
  darken as muiDarken,
  lighten as muiLighten,
} from '@material-ui/core/styles';

import { RcPaletteKeys } from '../theme/palette.type';
import { RcThemedStyled, RcThemeProps } from '../theme/theme.type';
import { getParsePaletteColor, palette2 } from './newPalette';

export function darken(
  colorInput: ReturnType<typeof palette2>,
  coefficient: number,
) {
  return (props: RcThemeProps): string => {
    const color =
      typeof colorInput === 'function' ? colorInput(props) : colorInput;

    return muiDarken(color, coefficient);
  };
}

export function lighten(
  colorInput: ReturnType<typeof palette2> | string,
  coefficient: number,
) {
  return (props: RcThemeProps): string => {
    const color =
      typeof colorInput === 'function' ? colorInput(props) : colorInput;

    return muiLighten(color, coefficient);
  };
}

/**
 * get color from palette, and contrast color defined in mui
 * @param props props
 *
 * @example
 * ```ts
 * const [currColor, contrastBgColor] = getContrastBgColor(props);
 * ```
 */
export const getContrastBgColor: RcThemedStyled<
  {
    color?: RcPaletteKeys;
  },
  any
> = ({ theme, color }) => {
  const currColor = getParsePaletteColor(color);

  return [
    currColor,
    theme.palette.type === 'light'
      ? /** those contrast value follow mui color */
        lighten(currColor, 0.62)
      : darken(currColor, 0.5),
  ];
};
