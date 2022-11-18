import { TouchRippleProps as MuiTouchRippleProps } from '@material-ui/core/ButtonBase/TouchRipple';

import { RcClasses } from '../../../../foundation';
import { RcSplitButtonProps, RcSplitButtonVariant } from '../SplitButton';

export const RcSplitButtonClasses = RcClasses<RcSplitButtonProps>(
  [
    'root',
    'groupedHorizontal',
    'actionButton',
    'controlButton',
    'menuOpen',
    'groupedContainedHorizontal',
  ],
  'RcSplitButton',
);

export const RcSplitButtonTouchRippleClasses = RcClasses<MuiTouchRippleProps>(
  ['child', 'ripplePulsate'],
  'RcSplitButton-TouchRipple',
);

export const getVariant = (variant: RcSplitButtonProps['variant']) => {
  switch (variant) {
    case 'round':
      return 'text';
    case 'plainIcon':
      return 'plain';
    default:
      return variant;
  }
};

export const variantIsHandler = (variant: RcSplitButtonVariant) => {
  return (arr: RcSplitButtonVariant[]) => arr.includes(variant);
};
