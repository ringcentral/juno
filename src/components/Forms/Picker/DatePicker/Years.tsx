import { DateType } from '@date-io/type';
import { useUtils as useMuiUtils } from '@material-ui/pickers';
import { MaterialUiPickersDate as MuiPickersDate } from '@material-ui/pickers/typings/date';
import React, { forwardRef, useLayoutEffect, useMemo, useRef } from 'react';

import {
  useEventCallback,
  useForkRef,
  useKeyboardMoveFocus,
  useOnlyOneFocusable,
} from '../../../../foundation';
import { RcDatePickerProps } from './DatePicker';
import { YearsWrapper } from './styles';
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
} & Pick<RcDatePickerProps, 'size'>;

const Years = forwardRef<any, YearsProps>((props, ref) => {
  const {
    date,
    onYearChange,
    minDate,
    size,
    maxDate,
    disablePast,
    disableFuture,
    now,
  } = props;
  const utils = useMuiUtils();

  const containerRef = useRef<HTMLDivElement>(null);

  const combineRef = useForkRef(containerRef, ref);

  const selectedYearRef = useRef<HTMLButtonElement>(null);
  const currentYear = utils.getYear(date || now);

  const years = useMemo(() => utils.getYearRange(minDate, maxDate), [
    maxDate,
    minDate,
    utils,
  ]);

  const onYearSelect = useEventCallback((year: number) => {
    const newDate = utils.setYear(date, year);

    onYearChange(newDate);
  });

  const focusedIndexRef = useRef(0);

  const focusedYear = years[focusedIndexRef.current]?.year();

  const { focusIndex, getItemProps } = useOnlyOneFocusable({
    focusedIndexRef,
    containerRef,
  });

  const getOptionDisabled = (year: MuiPickersDate) =>
    Boolean(
      (disablePast && utils.isBeforeYear(year, now)) ||
        (disableFuture && utils.isAfterYear(year, now)),
    );

  const columns = size === 'small' ? 2 : 4;

  const { onKeyFocusedIndexHandle: handleKeyDown } = useKeyboardMoveFocus({
    options: years,
    focusedIndexRef,
    columns,
    infinite: 'order',
    onFocusedIndexChange: (event, toIndex) => {
      focusIndex(toIndex);
      event?.preventDefault();
    },
    getOptionDisabled,
  });

  useLayoutEffect(() => {
    const index = years.findIndex((x) => utils.getYear(x) === currentYear);

    focusIndex(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <YearsWrapper
      role="presentation"
      aria-label=" "
      columns={columns}
      ref={combineRef}
      onKeyDown={handleKeyDown}
    >
      {years.map((year, index) => {
        const yearNumber = utils.getYear(year);
        const selected = yearNumber === currentYear;
        const focused = yearNumber === focusedYear;

        const disabled = getOptionDisabled(year);

        return (
          <li key={utils.getYearText(year)}>
            <Year
              {...getItemProps(index)}
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
