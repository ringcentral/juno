import React, {
  forwardRef,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import dayjs from 'dayjs';

import MuiCircularProgress from '@material-ui/core/CircularProgress';
import { useUtils as useMuiUtils } from '@material-ui/pickers';
import { runKeyHandler } from '@material-ui/pickers/_shared/hooks/useKeyDown';
import { MaterialUiPickersDate as MuiPickersDate } from '@material-ui/pickers/typings/date';
import { SlideDirection as MuiSlideDirection } from '@material-ui/pickers/views/Calendar/SlideTransition';

import {
  pick,
  RcClassesProps,
  useEventCallback,
  usePrevious,
  useRcPortalWindowContext,
  useResultRef,
} from '../../../../foundation';
import { RcButton } from '../../../Buttons';
import { transitionendSubscriber } from '../../../Transitions/utils';
import {
  DatePickerHeader,
  DatePickerHeaderProps,
  ViewType,
} from './DatePickerHeader';
import { Day, DayProps } from './Day';
import {
  CalendarSlideTransitionWrapper,
  DatePickerWrapper,
  DayFooterWrapper,
  DaysWrapper,
  ProgressContainer,
  StyledDayLabel,
  StyledDaysHeader,
  WeekWrapper,
} from './styles';
import {
  focusDayElement,
  isSameYearAndMonth,
  onTransitionEnd,
  RcDatePickerClasses,
  useScreenReaderContext,
} from './utils';
import { Years } from './Years';

type CalendarProps = {
  /** DateRange for setting */
  dateRange: {
    /**  Min date @DateIOType */
    min?: MuiPickersDate;
    /**  Max date @DateIOType */
    max?: MuiPickersDate;
  };
  /** Disable past dates */
  disablePast?: boolean;
  /** Disable future dates */
  disableFuture?: boolean;
  /** Text label for Today button */
  todayButtonText?: string;
  /** Date format string, default with 'MM/DD/YYYY' */
  formatString?: string;
  /** Custom renderer for day @DateIOType */
  renderDay?: (
    /** day to render */
    day: MuiPickersDate,
    /** the selelcted Date */
    selectedDate: MuiPickersDate,
    /** is the day in current month */
    dayInCurrentMonth: boolean,
    /** day Component */
    dayComponent: JSX.Element,
  ) => JSX.Element;
  /** Disable specific date @DateIOType */
  shouldDisableDate: (day: MuiPickersDate) => boolean;
  /** Callback firing on month change. Return promise to render spinner till it will not be resolved @DateIOType */
  onMonthChange?: (date: MuiPickersDate) => void | Promise<void>;
  /** Custom loading indicator  */
  loadingIndicator?: JSX.Element;

  date: MuiPickersDate;
  handleDaySelect: (day: MuiPickersDate, fromUserSelect?: boolean) => void;
  getInvalidateDateInRange: (day: MuiPickersDate) => false | MuiPickersDate;
} & Pick<DayProps, 'size'> &
  RcClassesProps<'calendarSlider' | 'progress' | 'footer'> &
  Pick<DatePickerHeaderProps, 'classes'>;

const Calendar = forwardRef<any, CalendarProps>(
  (
    {
      onMonthChange,
      size,
      date,
      shouldDisableDate,
      dateRange,
      todayButtonText,
      loadingIndicator,
      disablePast,
      disableFuture,
      renderDay,
      classes,
      handleDaySelect,
      getInvalidateDateInRange,
    },
    ref,
  ) => {
    const utils = useMuiUtils();
    const calendarRef = useRef<any>(null);

    const previousFocusDate = usePrevious(() => focusedDate);
    const previousView = usePrevious(() => view);
    const { document: doc } = useRcPortalWindowContext();
    const weeks = useRef<MuiPickersDate[][]>([]);

    // * `getWeekdays` not set locale, need set locale before get
    dayjs.locale(utils.locale);

    const { current: weekdays } = useResultRef(() => utils.getWeekdays());

    const { now, isTodayDisabled } = useMemo(() => {
      const nowDate = utils.date();

      return {
        now: nowDate,
        isTodayDisabled: shouldDisableDate(nowDate),
      };
    }, [shouldDisableDate, utils]);

    const [focusedDate, setFocusedDate] = useState(date);
    const [view, setView] = useState<ViewType>('day');

    const [slideDirection, setSlideDirection] =
      useState<MuiSlideDirection>('left');

    const [loadingQueue, setLoadingQueue] = useState(0);

    const { min, max } = dateRange;

    const currentMonthNumber = utils.getMonth(focusedDate);

    const pickClasses = useMemo(
      () => pick(classes, ['header', 'leftArrow', 'rightArrow', 'select']),
      [classes],
    );

    const sameMonthDate = isSameYearAndMonth(
      { source: focusedDate, comparing: previousFocusDate || null },
      utils,
    );

    if (!sameMonthDate) {
      weeks.current = utils.getWeekArray(focusedDate);
    }

    const viewChange = view !== previousView;

    const pushToLoadingQueue = () => {
      setLoadingQueue(loadingQueue + 1);
    };

    const popFromLoadingQueue = () => {
      setLoadingQueue(loadingQueue <= 0 ? 0 : loadingQueue - 1);
    };

    const handleMonthChange = useEventCallback(
      (newMonth: MuiPickersDate, direction: MuiSlideDirection) => {
        setSlideDirection(direction);

        setFocusedDate(getInvalidateDateInRange(newMonth) || newMonth);

        if (onMonthChange) {
          const returnVal = onMonthChange(newMonth);
          if (returnVal) {
            pushToLoadingQueue();
            returnVal.then(() => {
              popFromLoadingQueue();
            });
          }
        }
      },
    );

    const handleChangeView = useEventCallback(() => {
      setView(view === 'day' ? 'year' : 'day');
    });

    const disableNextMonth = useMemo(() => {
      const nextStartDay = utils.startOfMonth(utils.getNextMonth(focusedDate));

      return !!getInvalidateDateInRange(nextStartDay);
    }, [focusedDate, getInvalidateDateInRange, utils]);

    const disablePrevMonth = useMemo(() => {
      const prevLatestDay = utils.endOfMonth(
        utils.getPreviousMonth(focusedDate),
      );

      return !!getInvalidateDateInRange(prevLatestDay);
    }, [focusedDate, getInvalidateDateInRange, utils]);

    const backToToday = useEventCallback(() => {
      handleDaySelect(now);
    });

    const handleKeyDown = useEventCallback((event: React.KeyboardEvent) => {
      const moveDay = (value: number) => {
        const day = utils.addDays(focusedDate, value);

        if (day && !shouldDisableDate(day)) {
          const newMonthNumber = utils.getMonth(day);

          if (newMonthNumber !== currentMonthNumber) {
            return handleMonthChange(
              day,
              newMonthNumber > currentMonthNumber ? 'left' : 'right',
            );
          }

          setFocusedDate(day);
        }
      };

      const goToDate = (day: MuiPickersDate) => {
        setFocusedDate(getInvalidateDateInRange(day) || day);
      };

      const confirmDate = () => {
        event.stopPropagation();
        handleDaySelect(focusedDate);
      };

      runKeyHandler(event.nativeEvent as KeyboardEvent, {
        ArrowUp: () => moveDay(-7),
        ArrowDown: () => moveDay(7),
        ArrowLeft: () => moveDay(-1),
        ArrowRight: () => moveDay(1),
        Home: () => goToDate(utils.startOfMonth(focusedDate)),
        End: () => goToDate(utils.endOfMonth(focusedDate)),
        Enter: confirmDate,
        ' ': confirmDate,
      });
    });

    const { getBackToTodayAriaLabel, getDayAriaLabel } =
      useScreenReaderContext();

    const backToTodayAriaLabel = getBackToTodayAriaLabel?.();

    const header = useMemo(
      () => (
        <StyledDaysHeader size={size}>
          {weekdays.map((day) => (
            <StyledDayLabel size={size!} key={day} variant="caption">
              {day}
            </StyledDayLabel>
          ))}
        </StyledDaysHeader>
      ),
      [size, weekdays],
    );

    const renderDays = (week: MuiPickersDate[]) => {
      const selectedDate = date;

      return week.map((day) => {
        const disabled = shouldDisableDate(day);
        const isDayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;

        const dayText = utils.getDayText(day);

        const selected = utils.isSameDay(day, selectedDate);

        const ariaLabel = getDayAriaLabel?.(
          selected,
          `${utils.getDatePickerHeaderText(day)} ${utils.getYearText(day)}`,
        );

        const focused = utils.isSameDay(focusedDate, day);

        const dayComponent = (
          <Day
            size={size}
            disabled={disabled}
            current={utils.isSameDay(day, now)}
            hidden={!isDayInCurrentMonth}
            selected={selected}
            tabIndex={focused ? 0 : -1}
            focused={focused}
            day={day}
            aria-label={ariaLabel}
          >
            {dayText}
          </Day>
        );

        const handleClick =
          !disabled && isDayInCurrentMonth
            ? () => handleDaySelect(day)
            : undefined;

        return (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <div
            role="cell"
            key={day!.toString()}
            onClick={handleClick}
            onKeyPress={handleClick}
          >
            {renderDay
              ? renderDay(day, focusedDate, isDayInCurrentMonth, dayComponent)
              : dayComponent}
          </div>
        );
      });
    };

    const renderBody = () => {
      const loadingElement = loadingIndicator ? (
        loadingIndicator
      ) : (
        <MuiCircularProgress />
      );

      switch (view) {
        case 'day':
          return (
            <DaysWrapper role="presentation" aria-label=" ">
              {header}
              <CalendarSlideTransitionWrapper
                className={classes!.calendarSlider}
                slideDirection={slideDirection}
                transKey={currentMonthNumber}
              >
                {loadingQueue > 0 ? (
                  <ProgressContainer className={classes!.progress}>
                    {loadingElement}
                  </ProgressContainer>
                ) : (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                  <div
                    role="rowgroup"
                    data-transition-tag
                    onKeyDown={handleKeyDown}
                  >
                    {weeks.current.map((week) => (
                      <WeekWrapper
                        role="row"
                        size={size!}
                        key={`week-${week[0]!.toString()}`}
                      >
                        {renderDays(week)}
                      </WeekWrapper>
                    ))}
                  </div>
                )}
              </CalendarSlideTransitionWrapper>
              <DayFooterWrapper className={classes!.footer}>
                <RcButton
                  data-focusable
                  variant="plain"
                  onClick={backToToday}
                  disabled={isTodayDisabled}
                  aria-label={backToTodayAriaLabel}
                  data-test-automation-id="date-picker-today"
                >
                  {todayButtonText}
                </RcButton>
              </DayFooterWrapper>
            </DaysWrapper>
          );
        case 'year':
          return (
            <Years
              date={focusedDate}
              size={size}
              minDate={min!}
              maxDate={max!}
              onYearChange={(day) => {
                setView('day');
                const validateDate = getInvalidateDateInRange(day) || day;
                setFocusedDate(validateDate);
              }}
              disablePast={disablePast}
              disableFuture={disableFuture}
              now={now}
            />
          );
        default:
          return null;
      }
    };

    // same month anchor switch
    useLayoutEffect(() => {
      if (sameMonthDate && !viewChange) {
        focusDayElement(doc);
      }
    });

    // when view change and current is day also focusDay again
    useLayoutEffect(() => {
      if (previousView && view === 'day' && viewChange) {
        focusDayElement(doc);
      }
    }, [previousView, view, viewChange, doc]);

    useLayoutEffect(() => {
      focusDayElement(doc);

      calendarRef.current = doc.querySelector(
        `.${RcDatePickerClasses.popover} .${RcDatePickerClasses.popoverPaper}`,
      );

      const unsubscribe = transitionendSubscriber(
        calendarRef.current,
        (event) => {
          onTransitionEnd(event, doc);
        },
      );

      return () => {
        unsubscribe();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <DatePickerWrapper size={size!} ref={ref}>
        <DatePickerHeader
          classes={pickClasses}
          size={size}
          focusedDate={focusedDate!}
          slideDirection={slideDirection}
          view={view}
          onMonthChange={handleMonthChange}
          onViewChange={handleChangeView}
          disablePrevMonth={disablePrevMonth}
          disableNextMonth={disableNextMonth}
        />
        {renderBody()}
      </DatePickerWrapper>
    );
  },
);

Calendar.defaultProps = {};

Calendar.displayName = 'RcCalendar';

export { Calendar };
export type { CalendarProps };
