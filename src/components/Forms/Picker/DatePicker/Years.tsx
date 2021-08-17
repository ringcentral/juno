import { DateType } from '@date-io/type';
import { useUtils as useMuiUtils } from '@material-ui/pickers';
import { runKeyHandler } from '@material-ui/pickers/_shared/hooks/useKeyDown';
import { MaterialUiPickersDate as MuiPickersDate } from '@material-ui/pickers/typings/date';
import React, {
  forwardRef,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useEventCallback } from '../../../../foundation';
import { YearsWrapper } from './styles';
import { invalidateDateInRange } from './utils';
import { Year } from './Year';

type YearsProps = {
  /** the selected date. */
  date: MuiPickersDate;
  /** min Date of the displayed years range. */
  minDate: DateType;
  /** max Date of the displayed years range. */
  maxDate: DateType;
  /** is disable the past years. */
  disablePast?: boolean;
  /** is disable the future years. */
  disableFuture?: boolean;
  /** when selected year changes. */
  onYearChange: (date: MuiPickersDate) => void;
  /** now date */
  now: MuiPickersDate;
};
const YEARS_IN_ROW = 4;

const Years = forwardRef<any, YearsProps>((props, ref) => {
  const {
    date,
    onYearChange,
    minDate,
    maxDate,
    disablePast,
    disableFuture,
    now,
  } = props;
  const utils = useMuiUtils();

  const selectedYearRef = useRef<HTMLButtonElement>(null);
  const currentYear = utils.getYear(date || now);
  const [focusedYear, setFocusedYear] = useState<number>(currentYear);

  const min = useMemo(() => utils.startOfMonth(minDate), [minDate, utils]);
  const max = useMemo(() => utils.endOfMonth(maxDate), [maxDate, utils]);

  const { current: years } = useRef(utils.getYearRange(minDate, maxDate));

  const onYearSelect = useEventCallback((year: number) => {
    const newDate = utils.setYear(date, year);

    onYearChange(newDate);
  });

  const handleKeyDown = useEventCallback((event: React.KeyboardEvent) => {
    const validateThenSetYear = (value: number) => {
      if (
        !invalidateDateInRange(
          utils.setYear(utils.date(), value),
          {
            dateRange: { min, max },
            now,
            disableFuture,
            disablePast,
          },
          utils,
        )
      ) {
        setFocusedYear(value);
      }
    };

    runKeyHandler(event.nativeEvent as KeyboardEvent, {
      ArrowUp: () => validateThenSetYear(focusedYear - YEARS_IN_ROW),
      ArrowDown: () => validateThenSetYear(focusedYear + YEARS_IN_ROW),
      ArrowLeft: () => validateThenSetYear(focusedYear - 1),
      ArrowRight: () => validateThenSetYear(focusedYear + 1),
      Enter: () => onYearSelect(focusedYear),
      ' ': () => onYearSelect(focusedYear),
    });
  });

  useLayoutEffect(() => {
    selectedYearRef.current!.focus();
  }, [focusedYear]);

  return (
    <YearsWrapper
      role="presentation"
      aria-label=" "
      onKeyDown={handleKeyDown}
      ref={ref}
    >
      {years.map((year) => {
        const yearNumber = utils.getYear(year);
        const selected = yearNumber === currentYear;
        const focused = yearNumber === focusedYear;

        const disabled = Boolean(
          (disablePast && utils.isBeforeYear(year, now)) ||
            (disableFuture && utils.isAfterYear(year, now)),
        );

        return (
          <li key={utils.getYearText(year)}>
            <Year
              ref={focused ? selectedYearRef : undefined}
              key={utils.getYearText(year)}
              selected={selected}
              focused={yearNumber === focusedYear}
              value={yearNumber}
              onSelect={onYearSelect}
              disabled={disabled}
            >
              {utils.getYearText(year)}
            </Year>
          </li>
        );
      })}
    </YearsWrapper>
  );
});

Years.displayName = 'RcYears';

export { Years, YearsProps };
