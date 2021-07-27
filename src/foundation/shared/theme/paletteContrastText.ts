import { RcThemeProps } from '../../styles';
import { palette2 } from './newPalette';

/**
 * get current palette contrast text
 */
export function paletteContrastText(colorFn: ReturnType<typeof palette2>) {
  return ({ theme }: RcThemeProps): string => {
    return theme.palette.getContrastText(colorFn({ theme }));
  };
}
