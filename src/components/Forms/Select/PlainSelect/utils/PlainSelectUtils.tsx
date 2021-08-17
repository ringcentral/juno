import { TouchRippleProps as MuiTouchRippleProps } from '@material-ui/core/ButtonBase/TouchRipple';

import { RcClasses, UnionPick } from '../../../../../foundation';
import { RcButtonVariant } from '../../../../Buttons';
import { RcSelectProps } from '../../Select';
import { RcPlainSelectPropsVariant } from '../PlainSelect';

export type UnionButtonVariant = UnionPick<RcButtonVariant, 'text' | 'plain'>;

export const RcPlainSelectInputClasses = RcClasses<RcSelectProps['InputProps']>(
  ['root', 'input'],
  'RcPlainSelectInput',
);
export const RcPlainSelectTouchRippleClasses = RcClasses<MuiTouchRippleProps>(
  ['child', 'root'],
  'RcPlainSelect-TouchRipple',
);

export function switchVariantToButtonVariant(
  variant: RcPlainSelectPropsVariant,
): UnionButtonVariant {
  switch (variant) {
    case 'plainIcon':
      return 'plain';
    case 'round':
      return 'text';
    default:
      return variant;
  }
}
