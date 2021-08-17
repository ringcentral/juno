import React, { FunctionComponent, memo, useRef } from 'react';
import { DateType } from '@date-io/type';
import { useUtils as useMuiUtils } from '@material-ui/pickers';
import { MaterialUiPickersDate as MuiPickersDate } from '@material-ui/pickers/typings/date';
import { SlideDirection as MuiSlideDirection } from '@material-ui/pickers/views/Calendar/SlideTransition';
import { RcClassesProps } from '../../../../foundation';
import arrowLeftSvg from '../../../../icon/ArrowLeft2';
import arrowRightSvg from '../../../../icon/ArrowRight';
import { SelectArrowDownIcon } from '../../Select/styles/SelectArrowDownIcon';
import { RcDatePickerSize } from './DatePicker';
import {
  StyledCurrentMonth,
  SwitchHeaderButton,
  SwitchHeaderButtonWrapper,
  SwitchHeaderWrapper,
} from './styles';
import { useScreenReaderContext } from './utils';
import { RcVisuallyHidden } from '../../../VisuallyHidden';

type ViewType = 'day' | 'year';

type DatePickerHeaderProps = {
  /** the month on display */
  currentMonth: DateType;
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
      currentMonth: currentMonthProp,
      onMonthChange,
      disablePrevMonth,
      disableNextMonth,
      onViewChange,
      view,
      size,
      classes,
    } = props;
    const utils = useMuiUtils();
    const currentMonth = utils.startOfMonth(currentMonthProp);

    const preMonth = utils.getPreviousMonth(currentMonth);
    const nextMonth = utils.getNextMonth(currentMonth);
    const monthLabel = utils.getCalendarHeaderText(currentMonth);

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

    const {
      getMonthYearAriaLabel,
      getSwitchMonthAriaLabel,
    } = useScreenReaderContext();

    const monthYearAriaLabel = getMonthYearAriaLabel?.(
      `${monthLabel}`,
      ariaExpanded,
    );

    const nextMonthAriaLabel = getSwitchMonthAriaLabel?.(
      true,
      utils.getMonthText(currentMonth),
    );

    const previousMonthAriaLabel = getSwitchMonthAriaLabel?.(
      false,
      utils.getMonthText(currentMonth),
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
          <SwitchHeaderButtonWrapper size={size!} overlapSize={-3} view={view}>
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

export { DatePickerHeader, DatePickerHeaderProps, ViewType };
