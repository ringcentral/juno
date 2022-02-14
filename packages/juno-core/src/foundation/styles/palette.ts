import get from 'lodash/get';

import { RcPalette, RcTheme, RcThemeProps } from '../theme/theme.type';
import { doAlpha } from './opacity';

/** ******************************************
 *                 Colors                   *
 ******************************************* */
/**

/**
 * @deprecated
 * this palette is deprecated, using `palette2` to have type
 * @param name
 * @param sub
 * @param opacity
 */
export function palette(
  name: keyof RcPalette,
  sub: any = '',
  opacity?: number,
) {
  return ({ theme }: RcThemeProps) => {
    const subArr = sub.toString().split('.');
    let color = sub ? theme.palette[name][sub] : theme.palette[name];
    if (subArr.length > 1) {
      color = get(theme.palette[name], sub);
    }

    if (!opacity) {
      return color;
    }
    return doAlpha(color, opacity, theme);
  };
}

export function setAlpha(colorFn: ReturnType<typeof palette>, opacity: number) {
  return ({ theme }: RcThemeProps): string => {
    return doAlpha(colorFn({ theme }), opacity, theme);
  };
}

/** that method for using opacity token */
export function setOpacity(
  colorFn: ReturnType<typeof palette>,
  opacityName: keyof RcTheme['opacity'],
  reverse = false,
) {
  return (props: RcThemeProps): string => {
    const { theme } = props;
    const currentOpacity = theme.opacity[opacityName];

    return doAlpha(
      colorFn(props),
      reverse ? 1 - currentOpacity : currentOpacity,
      theme,
    );
  };
}

/** Make color to be light with hoverOpacity */
export function lightAlpha(colorFn: ReturnType<typeof palette>, unit: number) {
  return ({ theme }: RcThemeProps): string => {
    return setAlpha(
      colorFn,
      1 - theme.palette.action.hoverOpacity * unit,
    )({ theme });
  };
}
