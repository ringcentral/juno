import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MaterialUiPickersDate as MuiPickersDate } from '@material-ui/pickers/typings/date';
import moment from 'moment';
import React, { FunctionComponent, useMemo, useRef } from 'react';

import {
  combineClasses,
  combineProps,
  omit,
  RcBaseProps,
  RcBaseSize,
  RcClassesProps,
  styled,
  useEventCallback,
  withDeprecatedCheck,
  useThemeProps,
} from '../../../../foundation';
import DateBorder from '../../../../icon/DateBorder';
import { RcPopoverProps } from '../../../Popover';
import {
  PickerTextField,
  PickerTextFieldProps,
  PickerTextFieldRef,
} from '../utils';
import { Calendar, CalendarProps } from './Calendar';
import {
  RcDatePickerClasses,
  ScreenReaderProps,
  ScreenReaderProvider,
} from './utils';

type RcDatePickerSize = RcBaseSize<'small' | 'medium'>;

type RcDatePickerProps = {
  /** size for date picker, default with medium */
  size?: RcDatePickerSize;
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
  /** Min date @DateIOType */
  min?: MuiPickersDate;
  /** Max date @DateIOType */
  max?: MuiPickersDate;
  /** Text label for Today button */
  todayButtonText?: string;
  /** @deprecated Min date @DateIOType, using min instead */
  minDate?: MuiPickersDate;
  /** @deprecated Max date @DateIOType, using max instead */
  maxDate?: MuiPickersDate;
  /** @deprecated please use value to replace that */
  date?: RcDatePickerProps['value'];
} & RcBaseProps<Partial<CalendarProps>, 'date' | 'dateRange'> &
  RcBaseProps<PickerTextFieldProps, 'value' | 'children'> &
  Pick<RcPopoverProps, 'onClose'> &
  RcClassesProps<'popover' | 'popoverPaper'>;

const defaultMinDate = new Date('1900-01-01');
const defaultMaxDate = new Date('2100-01-01');
const DEFAULT_FORMAT = 'MM/DD/YYYY';

/** @release */
const _RcDatePicker: FunctionComponent<RcDatePickerProps> = (inProps) => {
  const props = useThemeProps({ props: inProps, name: 'RcDatePicker' });
  const {
    date,
    value = date,
    onChange,
    formatString,
    locale,
    todayButtonText,
    minDate,
    maxDate,
    min,
    max,
    disableFuture,
    disablePast,
    loadingIndicator,
    onMonthChange,
    renderDay,
    disabled,
    shouldDisableDate,
    size,
    onClose,
    onClear,
    classes,
    PopoverProps: PopoverPropsProp,
    screenReaderProps,
    ...rest
  } = props;
  const _maxDate = maxDate || max;
  const _minDate = minDate || min;
  const textFieldRef = useRef<PickerTextFieldRef>(null);

  const handleChange = useEventCallback(
    (date: Date | null, isFinish?: boolean | undefined) => {
      textFieldRef.current?.close();
      onChange?.(date, isFinish);
    },
  );

  const handleClear = useEventCallback((evt) => {
    onClear?.(evt);
    handleChange?.(null);
  });

  const momentValue = useMemo(() => (value ? moment(value) : null), [value]);

  const dateRange = useMemo(
    () => ({
      min: moment(_minDate || defaultMinDate),
      max: moment(_maxDate || defaultMaxDate),
    }),
    [_minDate, _maxDate],
  );

  const instance = useMemo(() => new MomentUtils({ locale, moment }), [locale]);

  const textFiledValue = useMemo(
    () => (momentValue ? instance.format(momentValue, formatString!) : ''),
    [momentValue, instance, formatString],
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

  return (
    <MuiPickersUtilsProvider
      utils={MomentUtils}
      locale={locale}
      libInstance={moment}
    >
      <PickerTextField
        ref={textFieldRef}
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
            date={momentValue || moment(new Date())}
            dateRange={dateRange}
            onChange={handleChange}
            disableFuture={disableFuture}
            disablePast={disablePast}
            loadingIndicator={loadingIndicator}
            onMonthChange={onMonthChange}
            renderDay={renderDay}
            shouldDisableDate={shouldDisableDate}
            todayButtonText={todayButtonText}
            formatString={formatString}
          />
        </ScreenReaderProvider>
      </PickerTextField>
    </MuiPickersUtilsProvider>
  );
};

const RcDatePicker = styled(
  withDeprecatedCheck(
    _RcDatePicker,
    [
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
    ],
    'RcDatePicker',
  ),
)``;

RcDatePicker.defaultProps = {
  clearBtn: true,
  formatString: DEFAULT_FORMAT,
  size: 'medium',
  todayButtonText: 'Today',
  label: 'Date',
};

RcDatePicker.displayName = 'RcDatePicker';

export {
  RcDatePicker,
  RcDatePickerProps,
  RcDatePickerSize,
  DEFAULT_FORMAT,
  RcDatePickerClasses,
};
