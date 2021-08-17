import { palette2, RcClasses, spacing, UnitMap } from '../../../foundation';
import { RcAlertProps, RcAlertSize } from '../Alert';

export const RcAlertClasses = RcClasses<RcAlertProps>(
  ['root', 'message', 'icon'],
  'RcAlert',
);

export const RcAlertSpacings: UnitMap<RcAlertSize> = {
  small: spacing(3, 4),
  medium: spacing(4, 5),
};

export const RcAlertColors: UnitMap<
  NonNullable<RcAlertProps['severity']>,
  {
    text: any;
    background: any;
  }
> = {
  info: {
    text: palette2('neutral', 'f06'),
    background: palette2('neutral', 'b03'),
  },
  error: {
    text: palette2('danger', 'f02'),
    background: palette2('danger', 'b01'),
  },
  success: {
    text: palette2('success', 'f02'),
    background: palette2('success', 'b01'),
  },
  warning: {
    text: palette2('warning', 'f02'),
    background: palette2('warning', 'b01'),
  },
};
