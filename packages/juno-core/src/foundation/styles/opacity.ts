import { alpha as MuiAlpha } from '@material-ui/core/styles';

import { RcTheme } from '../theme/theme.type';
import { logInDev } from '../utils';

/**
 * opacity
 * @param values
 */
export function opacity(name: keyof RcTheme['opacity'], reverse?: boolean) {
  return ({ theme }: any) => {
    const value = theme.opacity[name];
    if (reverse) {
      return 1 - value;
    }
    return value;
  };
}

/**
 * inner method
 */
export function doAlpha(
  color: string,
  opacity: number,
  theme: RcTheme,
): string {
  const alpha =
    String(opacity).indexOf('.') > -1
      ? opacity
      : theme.palette.action.hoverOpacity * opacity;

  try {
    return MuiAlpha(color, +alpha.toFixed(2));
  } catch (error) {
    logInDev({
      component: 'setOpacity',
      message:
        'your color pass into setOpacity is error color, check your color again, please',
    });

    return color;
  }
}
