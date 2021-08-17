import { RcTheme } from '../theme/theme.type';

/**
 * zIndex
 * @param values
 */
export function zIndex(name: keyof RcTheme['zIndex']) {
  return ({ theme }: any) => {
    return theme.zIndex[name];
  };
}
