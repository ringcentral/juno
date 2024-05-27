import React, { FunctionComponent, memo, useRef } from 'react';

import { DateType } from '@date-io/type';
import { useUtils as useMuiUtils } from '@material-ui/pickers';
import { MaterialUiPickersDate as MuiPickersDate } from '@material-ui/pickers/typings/date';
import { SlideDirection as MuiSlideDirection } from '@material-ui/pickers/views/Calendar/SlideTransition';
import {
  ArrowLeft2 as arrowLeftSvg,
  ArrowRight as arrowRightSvg,
} from '@ringcentral/juno-icon';

import { RcClassesProps } from '../../../../foundation';
import { RcVisuallyHidden } from '../../../VisuallyHidden';
import { SelectArrowDownIcon } from '../../Select/styles/SelectArrowDownIcon';
import { RcDatePickerSize } from './DatePicker';
import {
  StyledCurrentMonth,
  SwitchHeaderButton,
  SwitchHeaderButtonWrapper,
  SwitchHeaderWrapper,
} from './styles';
import { useScreenReaderContext } from './utils';

type ViewType = 'day' | 'year';

type DatePickerHeaderProps = {
  /** the month on display */
  focusedDate: DateType;
  /** with options 'right' | 'left' */
  slideDirection: MuiSlideDirection;
  /** the current view mode, with options 'day' | 'year'. */
  view: ViewType;
  /** when change view mode */
  onViewChange: () => void;
  /** trigger when Month changes */
  onMonthChange: (
    /** the month selected */
    date: MuiPickersDate,
    /** slideDirection */
    direction: MuiSlideDirection,
  ) => void | Promise<void>;
  /** is disable PrevMonth? with default false. */
  disablePrevMonth?: boolean;
  /** is disable NextMonth? with default false. */
  disableNextMonth?: boolean;
  /** two sizes: medium and small, default is medium. */
  size?: RcDatePickerSize;
} & RcClassesProps<'header' | 'select' | 'leftArrow' | 'rightArrow'>;

const DatePickerHeader: FunctionComponent<DatePickerHeaderProps> = memo(
  (props) => {
    const {
      focusedDate,
      onMonthChange,
      disablePrevMonth,
      disableNextMonth,
      onViewChange,
      view,
      size,
      classes,
    } = props;
    const utils = useMuiUtils();

    const preMonth = utils.getPreviousMonth(focusedDate);
    const nextMonth = utils.getNextMonth(focusedDate);
    const monthLabel = utils.getCalendarHeaderText(focusedDate);

    const changeFromRef = useRef<'next' | 'previous'>();

    const selectNextMonth = () => {
      onMonthChange(nextMonth, 'left');
      changeFromRef.current = 'next';
    };
    const selectPreviousMonth = () => {
      onMonthChange(preMonth, 'right');
      changeFromRef.current = 'previous';
    };

    const ariaExpanded = view === 'year';

    const { getMonthYearAriaLabel, getSwitchMonthAriaLabel } =
      useScreenReaderContext();

    const monthYearAriaLabel = getMonthYearAriaLabel?.(
      `${monthLabel}`,
      ariaExpanded,
    );

    const nextMonthAriaLabel = getSwitchMonthAriaLabel?.(
      true,
      utils.getMonthText(focusedDate),
    );

    const previousMonthAriaLabel = getSwitchMonthAriaLabel?.(
      false,
      utils.getMonthText(focusedDate),
    );

    return (
      <>
        {changeFromRef.current && (
          <RcVisuallyHidden role="region" aria-live="assertive">
            {changeFromRef.current === 'next'
              ? nextMonthAriaLabel
              : previousMonthAriaLabel}
          </RcVisuallyHidden>
        )}
        <SwitchHeaderWrapper size={size!} className={classes!.header}>
          <StyledCurrentMonth
            role={'button'}
            tabIndex={0}
            data-focusable
            view={view}
            onClick={onViewChange}
            aria-label={monthYearAriaLabel}
            aria-expanded={ariaExpanded}
            data-test-automation-id="date-picker-month-year"
            className={classes!.select}
          >
            {monthLabel}
            <SelectArrowDownIcon />
          </StyledCurrentMonth>
          <SwitchHeaderButtonWrapper size={size!} gap={3} view={view}>
            <SwitchHeaderButton
              color="neutral.f04"
              size="small"
              disabled={disablePrevMonth}
              onClick={selectPreviousMonth}
              symbol={arrowLeftSvg}
              aria-label={previousMonthAriaLabel}
              data-picker-action
              data-test-automation-id="date-picker-pre-month"
              className={classes!.leftArrow}
              focusVariant="focusRing"
            />
            <SwitchHeaderButton
              color="neutral.f04"
              size="small"
              disabled={disableNextMonth}
              onClick={selectNextMonth}
              symbol={arrowRightSvg}
              aria-label={nextMonthAriaLabel}
              data-picker-action
              data-test-automation-id="date-picker-next-month"
              className={classes!.rightArrow}
              focusVariant="focusRing"
            />
          </SwitchHeaderButtonWrapper>
        </SwitchHeaderWrapper>
      </>
    );
  },
);

DatePickerHeader.defaultProps = {
  disablePrevMonth: false,
  disableNextMonth: false,
};

DatePickerHeader.displayName = 'RcDatePickerHeader';

export { DatePickerHeader };
export type { DatePickerHeaderProps, ViewType };
