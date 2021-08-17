import { RcThemeProps } from '../theme/theme.type';
import { px } from './px';

/**
 * spacing
 * @param values
 */
export function spacing(...values: number[]) {
  return ({ theme }: RcThemeProps): string => {
    const unit = theme.spacing(1);
    return px(...values.map((n) => n * unit));
  };
}

export function toSpacing(value: number) {
  return value / 4;
}

/**
 * spacing unit value
 * @param values
 */
export function spacingUnit(values: number) {
  return ({ theme }: RcThemeProps): number => {
    const unit = theme.spacing(1);
    return values * unit;
  };
}
