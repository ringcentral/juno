import { RcClasses, spacing, UnitMap } from '../../../../../foundation';
import { RcTimePickerProps, RcTimePickerSize } from '../TimePicker';

type TimePickerVolume = {
  width: string;
  height: string;
  timeSystem: {
    margin: any;
  };
};

type TimePickerIconWidth = {
  s12: string;
  s24: string;
};

export const RcTimePickerUtils: UnitMap<RcTimePickerSize, TimePickerVolume> = {
  small: {
    width: '160px',
    height: '160px',
    timeSystem: {
      margin: spacing(1),
    },
  },
  medium: {
    width: '272px',
    height: '208px',
    timeSystem: {
      margin: spacing(6),
    },
  },
};

export const RcTimePickerIconWidths: UnitMap<
  RcTimePickerSize,
  TimePickerIconWidth
> = {
  small: { s12: '40px', s24: '24px' },
  medium: { s12: '56px', s24: '24px' },
};

export const RcTimePickerClasses = RcClasses<RcTimePickerProps>(
  ['popover', 'popoverPaper'],
  'RcTimePicker',
);
