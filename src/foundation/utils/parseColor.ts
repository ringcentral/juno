import { RcPaletteProp } from '../theme/paletteProp.type';

/**
 *
 * @param color income color
 * @param defaultColor when not income color use default color
 * @param useMain is use primary.main to set color when not have value
 */
function parseColor(
  color?: RcPaletteProp,
  defaultColor?: RcPaletteProp | null,
  useMain = true,
) {
  // * when there is not color pass into and have defaultColor, just using default color
  if (!color && defaultColor !== undefined) {
    return defaultColor;
  }

  let result: string[] = ['primary', 'main'];

  if (color) {
    if (color instanceof Array) {
      result = color;
    } else if (typeof color === 'string') {
      const colors = color.split('.');

      result = colors;
    } else {
      // if that is theme send back
      return color;
    }
  }

  if (useMain) {
    if (!result[0]) {
      result[0] = 'primary';
    }

    if (!result[1]) {
      result[1] = 'main';
    }
  }

  return result;
}

type RcParseColor = ReturnType<typeof parseColor>;

export { parseColor, RcParseColor };
