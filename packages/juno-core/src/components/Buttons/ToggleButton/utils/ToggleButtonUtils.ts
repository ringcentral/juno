import { RcClasses, UnitMap } from '../../../../foundation';
import { RcToggleButtonProps } from '../ToggleButton';

export const RcToggleButtonClasses = RcClasses<RcToggleButtonProps>(
  ['selected', 'disabled', 'label'],
  'RcToggleButton',
);

export const RcToggleButtonSpace: UnitMap<
  NonNullable<RcToggleButtonProps['size']>,
  {
    area: number;
    inner: number;
    outer: number;
  }
> = {
  small: { area: 0.5, inner: 1, outer: 2 }, // 16px icon, button width 20
  medium: { area: 1, inner: 1, outer: 2 }, // 20px icon, button width 28
  large: { area: 1, inner: 2, outer: 4 }, // 24px icon, button width 32
};
