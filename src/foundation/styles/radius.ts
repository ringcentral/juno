import { RcTheme } from '../theme/theme.type';

/**
 * radius
 * @param values
 */
export function radius(name: keyof RcTheme['radius']) {
  return ({ theme }: any) => {
    return theme.radius[name];
  };
}
