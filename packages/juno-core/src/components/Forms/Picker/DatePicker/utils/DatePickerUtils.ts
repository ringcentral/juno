import { useUtils as useMuiUtils } from '@material-ui/pickers';
import { MaterialUiPickersDate as MuiPickersDate } from '@material-ui/pickers/typings/date';

import {
  palette2,
  RcClasses,
  setOpacity,
  UnitMap,
} from '../../../../../foundation';
import { RcDefaultTextFieldWidth } from '../../../TextField/styles';
import { CalendarProps } from '../Calendar';
import { RcDatePickerProps, RcDatePickerSize } from '../DatePicker';

export const textColor = palette2('neutral', 'f06');
export const primaryColor = palette2('interactive', 'b02');
export const primaryHoverColor = setOpacity(primaryColor, '16');
export const disabledColor = palette2('disabled', 'f02');

export const RcDatePickerClasses = RcClasses<RcDatePickerProps>(
  [
    'popover',
    'popoverPaper',
    // calendar
    'calendarSlider',
    'footer',
    'progress',
    // header
    'header',
    'leftArrow',
    'rightArrow',
    'select',
  ],
  'RcDatePicker',
);

type DatePickerVolume = {
  width: string;
  height: string;
};

export const RcDatePickerSizes: UnitMap<RcDatePickerSize, DatePickerVolume> = {
  small: {
    width: RcDefaultTextFieldWidth,
    height: '296px',
  },
  medium: {
    width: '272px',
    height: '308px',
  },
};

export const RcDatePickerIconWidths: UnitMap<RcDatePickerSize, string> = {
  small: '18px',
  medium: '28px',
};

export const focusDayElement = () => {
  const elm = document.querySelector<HTMLElement>('[data-picker-focused]');
  elm?.focus();
};

export const isSameYearAndMonth = (
  { source, comparing }: { source: MuiPickersDate; comparing: MuiPickersDate },
  utils: ReturnType<typeof useMuiUtils>,
) => {
  if (!source || !comparing) {
    return false;
  }
  const thisMonth = utils.getMonth(source);
  const thisYear = utils.getYear(source);
  const comparingMonth = utils.getMonth(comparing);
  const comparingYear = utils.getYear(comparing);

  return thisMonth === comparingMonth && thisYear === comparingYear;
};

export const onTransitionEnd = (event: any) => {
  const activeElm = document.activeElement as HTMLElement;
  if (
    event.target.dataset['transitionTag'] &&
    // * check is not focus on other thing, like click next month
    activeElm.dataset['pickerAction'] !== 'true'
  ) {
    focusDayElement();
  }
};

type ValidateDateInRange = {
  now: MuiPickersDate;
} & Pick<CalendarProps, 'dateRange' | 'disableFuture' | 'disablePast'>;

export const invalidateDateInRange = (
  day: MuiPickersDate,
  {
    dateRange: { min, max },
    disableFuture,
    disablePast,
    now,
  }: ValidateDateInRange,
  utils: ReturnType<typeof useMuiUtils>,
) => {
  if (disableFuture && utils.isAfterDay(day, now)) {
    return now;
  }

  if (disablePast && utils.isBeforeDay(day, now)) {
    return now;
  }

  if (min && utils.isBeforeDay(day, utils.date(min))) {
    return min;
  }

  if (max && utils.isAfterDay(day, utils.date(max))) {
    return max;
  }

  return false;
};
