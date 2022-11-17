import { omit, RcClasses, UnitMap } from '../../../../foundation';
import { RcIconSizes } from '../../../Icon/utils';
import { RcIconButtonProps, RcIconButtonSize } from '../IconButton';

export const RcIconButtonClasses = RcClasses<RcIconButtonProps>(
  [
    'root',
    'disabled',
    'invisible',
    'outline',
    'contained',
    'inverse',
    'round',
    'persistBg',
  ],
  'RcIconButton',
);

export const RcIconButtonTouchRippleClasses = RcClasses<
  RcIconButtonProps['TouchRippleProps']
>(['ripplePulsate', 'child'], 'RcIconButtonTouchRipple');

export const RcIconButtonSizes = omit(RcIconSizes, ['inherit']) as Record<
  NonNullable<RcIconButtonProps['size']>,
  number
>;

export const RcIconButtonFocusVisibleInsetSize: UnitMap<
  RcIconButtonSize,
  number
> = {
  xxxlarge: 6,
  xxlarge: 5,
  xlarge: 5,
  large: 4,
  medium: 3,
  small: 2,
  xsmall: 2,
};
