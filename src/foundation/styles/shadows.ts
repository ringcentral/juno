import { RcTheme } from '../theme/theme.type';

/**
 * shadow
 * @param elevation 0 ~ 24 for different elevation shadow
 */
export function shadows(elevation: keyof RcTheme['shadows']) {
  return ({ theme }: any) => {
    return theme.shadows[elevation];
  };
}
