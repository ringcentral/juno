import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';

import dayjs from 'dayjs';

import DayjsUtils from '@date-io/dayjs';
import {
  MuiPickersUtilsProvider,
  useUtils as useMuiUtils,
} from '@material-ui/pickers';
import { findClosestEnabledDate as MuiFindClosestEnabledDate } from '@material-ui/pickers/_helpers/date-utils';
import { MaterialUiPickersDate as MuiPickersDate } from '@material-ui/pickers/typings/date';
import { DateBorder } from '@ringcentral/juno-icon';

import {
  combineClasses,
  combineProps,
  omit,
  RcBaseProps,
  RcBaseSize,
  RcClassesProps,
  styled,
  useControlled,
  useDeprecatedCheck,
  useEventCallback,
  useThemeProps,
} from '../../../../foundation';
import { RcPopoverProps } from '../../../Popover';
import {
  PickerTextField,
  PickerTextFieldProps,
  PickerTextFieldRef,
} from '../utils';
import { Calendar, CalendarProps } from './Calendar';
import {
  invalidateDateInRange,
  RcDatePickerClasses,
  ScreenReaderProps,
  ScreenReaderProvider,
} from './utils';

type RcDatePickerSize = RcBaseSize<'small' | 'medium'>;

type RcDatePickerProps = {
  /** size for date picker, default with medium */
  size?: RcDatePickerSize;
  /**
   * Calendar onChange
   *
   * @param {Date} date update date value
   * @param {boolean} fromUserSelect is that change come from user select day, when `false` mean that is come from range limitation
   */
  onChange?: (date: Date | null, fromUserSelect?: boolean) => void;
  /** i18n locale country */
  locale?: string;
  /** value for picker */
  value?: Date | null;
  /** Props containing functions for getting attribute for target element */
  screenReaderProps?: ScreenReaderProps;
  /** Date format string, default with 'MM/DD/YYYY' */
  formatString?: string;
  /** when hover on the textField, if show the clearBtn. With default is true. */
  clearBtn?: boolean;
  /** Min date */
  min?: Date | MuiPickersDate;
  /** Max date */
  max?: Date | MuiPickersDate;
  /** Text label for Today button */
  todayButtonText?: string;
  /** @deprecated Min date @DateIOType, using min instead */
  minDate?: MuiPickersDate;
  /** @deprecated Max date @DateIOType, using max instead */
  maxDate?: MuiPickersDate;
  /** @deprecated please use value to replace that */
  date?: RcDatePickerProps['value'];
} & RcBaseProps<
  Partial<CalendarProps>,
  'date' | 'dateRange' | 'handleDaySelect' | 'getInvalidateDateInRange'
> &
  RcBaseProps<PickerTextFieldProps, 'value' | 'children'> &
  Pick<RcPopoverProps, 'onClose'> &
  RcClassesProps<'popover' | 'popoverPaper'>;

const defaultMinDate = new Date('1900-01-01');
const defaultMaxDate = new Date('2100-01-01');
const DEFAULT_FORMAT = 'MM/DD/YYYY';

/** @release */
const InnerRcDatePicker = forwardRef<any, RcDatePickerProps>((props, ref) => {
  const {
    date,
    value = date,
    onChange,
    formatString,
    locale,
    todayButtonText,
    minDate: minDateProp,
    maxDate: maxDateProp,
    min,
    max,
    disableFuture,
    disablePast,
    loadingIndicator,
    onMonthChange,
    renderDay,
    disabled,
    shouldDisableDate: shouldDisableDateProp,
    size,
    onClose,
    onClear,
    classes,
    PopoverProps: PopoverPropsProp,
    screenReaderProps,
    ...rest
  } = props;
  const utils = useMuiUtils();

  const [controlledValue, setControlledValue] = useControlled({
    controlled: value,
    default: null,
    name: 'RcDatePicker',
  });

  const emitValueRef = useRef<Date | null>(null);

  const maxDate = minDateProp || max;
  const minDate = maxDateProp || min;

  const actionRef = useRef<PickerTextFieldRef>(null);

  const dateRange = useMemo(
    () => ({
      min: dayjs(minDate || defaultMinDate),
      max: dayjs(maxDate || defaultMaxDate),
    }),
    [minDate, maxDate],
  );

  const getInvalidateDateInRange = useEventCallback((day: MuiPickersDate) =>
    invalidateDateInRange(
      day,
      { dateRange, now: utils.date(), disableFuture, disablePast },
      utils,
    ),
  );

  const shouldDisableDate = useEventCallback((day: MuiPickersDate) => {
    return (
      Boolean(getInvalidateDateInRange(day)) ||
      Boolean(shouldDisableDateProp?.(day))
    );
  });

  const getClosestEnableDate = useCallback(
    (currDate: dayjs.Dayjs) =>
      MuiFindClosestEnabledDate({
        date: currDate,
        utils,
        minDate: utils.date(dateRange.min),
        maxDate: utils.date(dateRange.max),
        disablePast: Boolean(disablePast),
        disableFuture: Boolean(disableFuture),
        shouldDisableDate,
      }),
    [
      dateRange.max,
      dateRange.min,
      disableFuture,
      disablePast,
      shouldDisableDate,
      utils,
    ],
  );

  const initDate = useMemo(() => {
    return getClosestEnableDate(dayjs(utils.date()));
  }, [getClosestEnableDate, utils]);

  const dayjsValue = useMemo(
    () => (controlledValue ? dayjs(controlledValue) : null),
    [controlledValue],
  );

  const nowDate = dayjsValue || initDate;

  const textFiledValue = useMemo(
    () => (dayjsValue ? utils.format(dayjsValue, formatString!) : ''),
    [dayjsValue, utils, formatString],
  );

  const PopoverProps = useMemo(
    () =>
      combineProps(
        {
          classes: combineClasses(
            {
              root: RcDatePickerClasses.popover,
              paper: RcDatePickerClasses.popoverPaper,
            },
            {
              root: classes?.popover,
              paper: classes?.popoverPaper,
            },
          ),
          onClose,
        },
        PopoverPropsProp,
      ),
    [PopoverPropsProp, classes, onClose],
  );

  const calendarClasses = useMemo<CalendarProps['classes']>(
    () =>
      combineClasses(
        omit(RcDatePickerClasses, ['popover', 'popoverPaper']),
        omit(classes, ['popover', 'popoverPaper']),
      ),
    [classes],
  );

  const handleChange = (
    toDate: Date | null,
    fromUserSelect?: boolean | undefined,
  ) => {
    actionRef.current?.close();

    setControlledValue(toDate);
    // save inner change value
    emitValueRef.current = toDate;

    onChange?.(toDate, fromUserSelect);
  };

  const handleClear = useEventCallback((evt) => {
    onClear?.(evt);
    handleChange?.(null);
  });

  const handleDaySelect = (day: MuiPickersDate, fromUserSelect = true) => {
    const newDay = day ? utils.startOfDay(day)!.toDate() : null;

    handleChange(newDay, fromUserSelect);
  };

  useEffect(() => {
    if (
      // only when inner value change need check again is that value is valid
      dayjsValue &&
      value !== emitValueRef.current &&
      shouldDisableDate(dayjsValue)
    ) {
      const closestEnabledDate = getClosestEnableDate(dayjsValue);

      handleDaySelect(closestEnabledDate, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <PickerTextField
      ref={ref}
      action={actionRef}
      onClear={handleClear}
      PopoverProps={PopoverProps}
      value={textFiledValue}
      disabled={disabled}
      ActionSymbol={DateBorder}
      {...rest}
    >
      <ScreenReaderProvider screenReaderProps={screenReaderProps!}>
        <Calendar
          size={size}
          classes={calendarClasses}
          date={nowDate}
          dateRange={dateRange}
          handleDaySelect={handleDaySelect}
          disableFuture={disableFuture}
          disablePast={disablePast}
          loadingIndicator={loadingIndicator}
          onMonthChange={onMonthChange}
          renderDay={renderDay}
          shouldDisableDate={shouldDisableDate}
          getInvalidateDateInRange={getInvalidateDateInRange}
          todayButtonText={todayButtonText}
          formatString={formatString}
        />
      </ScreenReaderProvider>
    </PickerTextField>
  );
});

const _RcDatePicker = forwardRef<any, RcDatePickerProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcDatePicker' });

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDeprecatedCheck(RcDatePicker, props, [
      {
        prop: 'minDate',
        time: '2021-3',
        comment: `Min date @DateIOType, using min instead `,
      },
      {
        prop: 'maxDate',
        time: '2021-3',
        comment: `Max date @DateIOType, using max instead `,
      },
      {
        prop: 'date',
        time: '2021-3',
        comment: `please use value to replace that `,
      },
    ]);
  }

  return (
    <MuiPickersUtilsProvider
      utils={DayjsUtils}
      locale={props.locale}
      libInstance={dayjs}
    >
      <InnerRcDatePicker ref={ref} {...props} />
    </MuiPickersUtilsProvider>
  );
});

const RcDatePicker = styled(_RcDatePicker)``;

RcDatePicker.defaultProps = {
  clearBtn: true,
  formatString: DEFAULT_FORMAT,
  size: 'medium',
  todayButtonText: 'Today',
  locale: 'en',
  label: 'Date',
};

RcDatePicker.displayName = 'RcDatePicker';

export { DEFAULT_FORMAT, RcDatePicker, RcDatePickerClasses };
export type { RcDatePickerProps, RcDatePickerSize };
