import React, {
  forwardRef,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { runKeyHandler } from '@material-ui/pickers/_shared/hooks/useKeyDown';

import {
  combineClasses,
  combineProps,
  logInDev,
  RcBaseProps,
  RcBaseSize,
  RcClassesProps,
  styled,
  useDepsChange,
  useEventCallback,
  useThemeProps,
  withDeprecatedCheck,
} from '../../../../foundation';
import TimeBorderIcon from '../../../../icon/TimeBorder';
import { RcBox } from '../../../Box';
import {
  PickerTextField,
  PickerTextFieldProps,
  PickerTextFieldRef,
} from '../utils';
import { TIME_SYSTEM_TEXT } from './constant';
import {
  NumberPicker,
  NumberPickerProps,
  NumberPickerRef,
} from './NumberPicker';
import { SelectionView } from './SelectionView';
import { StyledPickerPopperWrap } from './styles';
import { ToggleText, ToggleTextProps, ToggleTextRef } from './ToggleText';
import {
  getFormattedTime,
  getHourAndMinute,
  getNumberPickerBoundary,
  getPeriod,
  getRangeBoundary,
  getTimestamp,
  getTimestampFromDate,
  HALF_DAY_HOURS,
  minuteSource,
  parseNumberToString,
  RcTimePickerClasses,
  TIME_GAP,
  timestampToDate,
  twelveHourSystemSource,
  twentyFourHourSystemSource,
} from './utils';

type RcTimePickerSize = RcBaseSize<'small' | 'medium'>;

type RcClickFiledStyleProps = {
  /** Is 12 hours system */
  isTwelveHourSystem?: boolean;
  /** with two sizes: medium and small */
  size?: RcTimePickerSize;
  /** disabled of icon */
  disabled?: boolean;
};

type PickNumberPickerProps = RcBaseProps<
  Partial<NumberPickerProps>,
  | 'size'
  | 'onUpdateValue'
  | 'onClose'
  | 'onClick'
  | 'onKeyDown'
  | 'value'
  | 'min'
  | 'max'
  | 'isTwelveHourSystem'
  | 'source'
  | 'step'
>;

type RcTimePickerProps = {
  /** with two size: 'small' | 'medium', default with medium. */
  size?: RcTimePickerSize;
  /** Is 12 hours system */
  isTwelveHourSystem?: boolean;
  /** Date or timestamp */
  value?: number | Date;
  /** When all using date, this props will be remove, */
  dateMode?: boolean;
  /** when user change time */
  onChange?: (time?: RcTimePickerProps['value']) => void;
  /** min time */
  min?: number | Date;
  /** max time */
  max?: number | Date;
  /** props for hourPicker component */
  HourPickerProps?: PickNumberPickerProps;
  /** props for minutePicker component */
  MinutePickerProps?: PickNumberPickerProps;
  /** props for periodToggle component */
  PeriodToggleProps?: RcBaseProps<
    Partial<ToggleTextProps>,
    | 'disabled'
    | 'isTwelveHourSystem'
    | 'size'
    | 'value'
    | 'onUpdateValue'
    | 'children'
  >;
  // TODO: this will be remove, use comment props with value
  /** @deprecated this props will be removed, using value to replace that */
  times?: RcTimePickerProps['value'];
} & RcBaseProps<PickerTextFieldProps, 'onClick' | 'value' | 'children'> &
  RcClassesProps<'popover' | 'popoverPaper'>;

type UpdateTimeOption = {
  hour?: number;
  minute?: number;
  period?: TIME_SYSTEM_TEXT;
};

const _RcTimePicker = forwardRef<any, RcTimePickerProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcTimePicker' });
  const {
    isTwelveHourSystem,
    value,
    times,
    onChange,
    disabled,
    dateMode,
    min,
    max,
    size,
    onKeyDown,
    onClear,
    HourPickerProps,
    MinutePickerProps,
    PeriodToggleProps,
    PopoverProps: PopoverPropsProp,
    InputProps: InputPropsProp,
    classes,
    ...rest
  } = props;

  // TODO: when props remove clear that code, not use forwardRef for Jupiter test issue
  if (times) {
    logInDev({
      component: 'RcTimePicker',
      target: 'times',
      time: '2021-3',
      comment: `this props will be removed, using value to replace that `,
    });
  }

  const actionRef = useRef<PickerTextFieldRef>(null);
  const hourRef = useRef<NumberPickerRef>(null);
  const minuteRef = useRef<NumberPickerRef>(null);
  const periodRef = useRef<ToggleTextRef>(null);
  const textFiledValueRef = useRef('');

  const [selectionShowType, setSelectionType] = useState<
    'none' | 'hour' | 'minute'
  >('none');

  const nowTime = value! ?? times!;

  const isHaveValue = nowTime !== undefined;

  const isDateMode = nowTime instanceof Date || dateMode;

  const currentTimestamp = getTimestamp(nowTime);

  const currentHourMinute = getHourAndMinute(currentTimestamp);

  const isHourView = selectionShowType === 'hour';

  const currentPeriod = getPeriod(currentHourMinute.hour);

  const recoupHour =
    isTwelveHourSystem && currentPeriod === TIME_SYSTEM_TEXT.PM
      ? HALF_DAY_HOURS
      : 0;

  const range = useMemo(() => {
    return getRangeBoundary({ min, max });
  }, [max, min]);

  const getEmitInitDate = useEventCallback(() => {
    const date = isHaveValue
      ? nowTime instanceof Date
        ? new Date(nowTime)
        : timestampToDate(nowTime)
      : new Date();
    if (nowTime) {
      const { hour, minute } = currentHourMinute;
      date.setHours(hour, minute, 0, 0);
    } else {
      date.setHours(0, 0, 0, 0);
    }
    return date;
  });

  const handleChange = useCallback(
    (toValue: Date | undefined) => {
      if (onChange) {
        if (isDateMode) {
          onChange(toValue);
        } else {
          // * when time is zero emit undefined
          onChange(toValue ? getTimestampFromDate(toValue) : undefined);
        }
      }
    },
    [isDateMode, onChange],
  );

  const updateTime = (option: UpdateTimeOption) => {
    const {
      hour = hourRef.current?.value,
      minute = minuteRef.current?.value,
      period = periodRef.current?.value,
    } = option;

    const time = getEmitInitDate();

    if (minute !== undefined) {
      time.setMinutes(minute);
    }

    if (hour !== undefined) {
      time.setHours(hour + recoupHour);
    }

    if (period !== undefined) {
      const currHour = time.getHours();

      if (period === TIME_SYSTEM_TEXT.PM) {
        if (currHour < HALF_DAY_HOURS) {
          time.setHours(currHour + HALF_DAY_HOURS);
        }
      } else if (currHour >= HALF_DAY_HOURS) {
        time.setHours(currHour - HALF_DAY_HOURS);
      }
    }

    const toTimestamp = getTimestamp(time);

    if (range.max.date && toTimestamp > range.max.timestamp) {
      time.setHours(range.max.hour!);
      time.setMinutes(range.max.minute!);
    } else if (range.min.date && toTimestamp < range.min.timestamp) {
      time.setHours(range.min.hour!);
      time.setMinutes(range.min.minute!);
    }

    handleChange(time);
  };

  const handleHourChange = useEventCallback((hour: number) => {
    updateTime({ hour });
  });

  const handleMinuteChange = useEventCallback((minute: number) =>
    updateTime({ minute }),
  );

  const onTogglePeriod = useEventCallback((period: TIME_SYSTEM_TEXT) =>
    updateTime({ period }),
  );

  const handleClear = useEventCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      let time: Date | undefined;

      // if that is date format, we couldn't reset to undefined, that will miss that date information.
      if (isDateMode) {
        if (range.min.date) {
          time = getEmitInitDate();

          time.setHours(range.min.hour!);
          time.setMinutes(range.min.minute!);
        } else {
          time = new Date(nowTime);
          time.setHours(0);
          time.setMinutes(0);
        }
      }
      onClear?.(e);
      handleChange(time);
    },
  );

  const handleSelectionViewClick = useEventCallback((toValue: number): void => {
    updateTime(isHourView ? { hour: toValue } : { minute: toValue });
    setSelectionType('none');
  });

  const closeMenu = useEventCallback(() => {
    actionRef.current?.close();
  });

  const setHourSelectionShow = useEventCallback(() => setSelectionType('hour'));

  const setMinuteSelectionShow = useEventCallback(() =>
    setSelectionType('minute'),
  );

  const handlePopoverKeydown = useEventCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const onConfirmAndClose = () => {
        updateTime({});
        closeMenu();
      };

      runKeyHandler(event as any, {
        Enter: onConfirmAndClose,
        ' ': onConfirmAndClose,
        Escape: closeMenu,
      });
    },
  );

  const getRecoupHour = (currHour: number, period?: TIME_SYSTEM_TEXT) => {
    switch (period) {
      case TIME_SYSTEM_TEXT.PM:
        if (currHour < HALF_DAY_HOURS) {
          return HALF_DAY_HOURS;
        }
        break;
      case TIME_SYSTEM_TEXT.AM:
        if (currHour < HALF_DAY_HOURS) {
          if (currHour >= HALF_DAY_HOURS) {
            return -HALF_DAY_HOURS;
          }
        }
        break;
      default:
        break;
    }

    return 0;
  };

  const handleHourInnerChange = useEventCallback((hour: number) => {
    const minuteInstance = minuteRef.current!;
    const periodInstance = periodRef.current;
    const currRecoupHour = getRecoupHour(hour, periodInstance?.value);

    const newRange = getNumberPickerBoundary(hour + currRecoupHour, {
      range,
      isTwelveHourSystem,
    });

    minuteInstance.setRange(newRange.minute);
  });

  const handlePeriodInnerChange = useEventCallback(
    (period: TIME_SYSTEM_TEXT) => {
      const minuteInstance = minuteRef.current!;
      const hourInstance = hourRef.current!;

      const currHour = hourInstance.value;
      const currRecoupHour = getRecoupHour(currHour, period);

      const newRange = getNumberPickerBoundary(currHour + currRecoupHour, {
        range,
        isTwelveHourSystem,
      });

      hourInstance.setRange(newRange.hour);

      minuteInstance.setRange(newRange.minute);
    },
  );

  const renderHourValue = useEventCallback((hourValue: number) => {
    return parseNumberToString(hourValue, isTwelveHourSystem);
  });

  const PopoverProps = useMemo(
    () =>
      combineProps(
        {
          classes: combineClasses(
            {
              root: RcTimePickerClasses.popover,
              paper: RcTimePickerClasses.popoverPaper,
            },
            {
              root: classes?.popover,
              paper: classes?.popoverPaper,
            },
          ),
          onKeyDown: handlePopoverKeydown,
          TransitionProps: {
            onEnter: () => setSelectionType('none'),
          },
        },
        PopoverPropsProp,
      ),
    [PopoverPropsProp, classes, handlePopoverKeydown],
  );

  // * make sure value inside range
  useLayoutEffect(() => {
    const time = getEmitInitDate();

    if (range.max.date && currentTimestamp > range.max.timestamp) {
      time.setHours(range.max.hour!);
      time.setMinutes(range.max.minute!);
      handleChange(time);
    } else if (range.min.date && currentTimestamp < range.min.timestamp) {
      time.setHours(range.min.hour!);
      time.setMinutes(range.min.minute!);
      handleChange(time);
    }
  }, [currentTimestamp, range, handleChange, getEmitInitDate]);

  // * update input value
  useDepsChange(() => {
    if (currentTimestamp === undefined) {
      textFiledValueRef.current = '';
      return;
    }
    const { hour, minute } = currentHourMinute;

    const formattedTime = getFormattedTime(
      {
        hour,
        minute,
        period: currentPeriod,
      },
      isTwelveHourSystem,
    );

    textFiledValueRef.current = formattedTime;
  }, [
    currentHourMinute.hour,
    currentHourMinute.minute,
    currentTimestamp,
    isTwelveHourSystem,
    currentPeriod,
  ]);

  // * when no init value, open menu use min as value
  const originalHourValue = isHaveValue
    ? currentHourMinute.hour
    : // * use original range to calculate period value
      range.min.hour || 0;

  // * get boundary must use current show value
  const boundary = useMemo(
    () =>
      getNumberPickerBoundary(originalHourValue, {
        range,
        isTwelveHourSystem,
      }),
    [isTwelveHourSystem, originalHourValue, range],
  );

  // * when min and max is in same period
  const toggleTextDisabled = useMemo(() => {
    return !!(
      range.min.hour &&
      // * min is pm time
      (range.min.hour >= HALF_DAY_HOURS ||
        (range.max.hour &&
          // * min and max in same AM period
          range.min.hour < HALF_DAY_HOURS &&
          range.max.hour < HALF_DAY_HOURS))
    );
  }, [range.max.hour, range.min.hour]);

  const hourValue = isTwelveHourSystem
    ? originalHourValue % HALF_DAY_HOURS
    : originalHourValue;

  // * when no init value, open menu use min as value
  const minuteValue = isHaveValue
    ? currentHourMinute.minute
    : boundary.minute.min;

  const periodValue = isHaveValue
    ? currentPeriod
    : getPeriod(originalHourValue);

  return (
    <PickerTextField
      ref={ref}
      action={actionRef}
      onClear={handleClear}
      value={textFiledValueRef.current}
      disabled={disabled}
      PopoverProps={PopoverProps}
      ActionSymbol={TimeBorderIcon}
      {...rest}
    >
      <StyledPickerPopperWrap size={size}>
        {selectionShowType === 'none' ? (
          <>
            <NumberPicker
              ref={hourRef}
              size={size}
              onInnerChange={handleHourInnerChange}
              onClick={setHourSelectionShow}
              onClose={closeMenu}
              value={hourValue}
              {...boundary.hour}
              onUpdateValue={handleHourChange}
              step={1}
              source={
                isTwelveHourSystem
                  ? twelveHourSystemSource
                  : twentyFourHourSystemSource
              }
              renderValue={renderHourValue}
              automationId="time-picker-hour"
              {...HourPickerProps}
            />
            <RcBox textAlign="center" width="48px">
              :
            </RcBox>
            <NumberPicker
              ref={minuteRef}
              size={size}
              {...boundary.minute}
              onUpdateValue={handleMinuteChange}
              onClick={setMinuteSelectionShow}
              onClose={closeMenu}
              value={minuteValue}
              source={minuteSource}
              step={TIME_GAP}
              automationId="time-picker-minute"
              {...MinutePickerProps}
            />
            {isTwelveHourSystem && (
              <div>
                <ToggleText
                  ref={periodRef}
                  size={size}
                  disabled={toggleTextDisabled}
                  onUpdateValue={onTogglePeriod}
                  onInnerChange={handlePeriodInnerChange}
                  onClose={closeMenu}
                  value={periodValue}
                  {...PeriodToggleProps}
                />
              </div>
            )}
          </>
        ) : (
          <SelectionView
            size={size}
            {...(isHourView ? boundary.hour : boundary.minute)}
            source={
              isHourView
                ? isTwelveHourSystem
                  ? twelveHourSystemSource
                  : twentyFourHourSystemSource
                : minuteSource
            }
            isTwelveHourSystem={isHourView && isTwelveHourSystem}
            value={isHourView ? hourValue : minuteValue}
            onClick={handleSelectionViewClick}
            automationId={`time-picker-${selectionShowType}`}
          />
        )}
      </StyledPickerPopperWrap>
    </PickerTextField>
  );
});

/** @release */
const RcTimePicker = styled(
  withDeprecatedCheck(
    _RcTimePicker,
    [
      {
        prop: 'times',
        time: '2021-4',
        comment: `@deprecated this props will be removed, using value to replace that`,
      },
    ],
    'RcTimePicker',
  ),
)``;

RcTimePicker.defaultProps = {
  clearBtn: true,
  dateMode: false,
  size: 'medium',
  HourPickerProps: {
    getScreenReaderLabel: (hour: string) =>
      `Hour: ${hour}, use up and down arrow keys to change hour time by 1`,
  },
  MinutePickerProps: {
    getScreenReaderLabel: (minute: string) =>
      `Minute: ${minute}, use up and down arrow keys to change minutes time by 15 minutes`,
  },
  PeriodToggleProps: {
    getScreenReaderLabel: (period: string) =>
      `${period}, use up or down arrow keys to switch between AM or PM`,
  },
};

RcTimePicker.displayName = 'RcTimePicker';

export { RcTimePicker };
export type { RcClickFiledStyleProps, RcTimePickerProps, RcTimePickerSize };
