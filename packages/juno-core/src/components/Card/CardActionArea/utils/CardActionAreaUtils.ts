import { RcClasses } from '../../../../foundation';
import { RcCardActionAreaProps } from '../CardActionArea';

export const RcCardActionAreaClasses = RcClasses<RcCardActionAreaProps>(
  ['root', 'focusHighlight', 'focusVisible', 'disableRipple'],
  'RcCardActionArea',
);

export const RcCardActionAreaRippleClasses = RcClasses<
  RcCardActionAreaProps['TouchRippleProps']
>(['root', 'rippleVisible'], 'RcCardActionAreaTouchRipple');
