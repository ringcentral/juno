import { omit, RcClasses, UnitMap } from '../../../../foundation';
import { RcIconSizes } from '../../../Icon/utils';
import { RcIconButtonProps, RcIconButtonSize } from '../IconButton';

export const RcIconButtonClasses = RcClasses<RcIconButtonProps>(
  ['root', 'disabled', 'invisible', 'outline', 'contained', 'persistBg'],
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
  xxxlarge: 7,
  xxlarge: 6,
  xlarge: 6,
  large: 5,
  medium: 4,
  small: 3,
  xsmall: 3,
};
