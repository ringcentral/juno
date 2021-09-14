import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import clsx from 'clsx';
import React, { forwardRef, memo, ReactNode, RefObject } from 'react';

import { RcDatePickerSize } from './DatePicker';
import { StyledDay } from './styles';

type DayProps = {
  /** Day text */
  children: ReactNode;
  /** is today, default with false */
  current?: boolean;
  /** is disabled?, default with false */
  disabled?: boolean;
  /** is focused?, default with false */
  focused?: boolean;
  /** is hidden? default with false */
  hidden?: boolean;
  /** is selected? default with false */
  selected?: boolean;
  /** with prop medium and small, default with medium */
  size?: RcDatePickerSize;
  day: MaterialUiPickersDate;
  tabIndex: number;
};

const _Day = forwardRef(
  (props: DayProps, ref: RefObject<HTMLButtonElement>) => {
    const {
      children,
      disabled,
      hidden,
      current,
      selected,
      size,
      focused,
      day,
      ...rest
    } = props;

    return (
      <StyledDay
        aria-pressed={focused}
        ref={ref}
        size={size}
        selected={selected}
        data-picker-focused={focused ? '' : undefined}
        // TODO: remove those className
        hidden={hidden}
        className={clsx({
          'Day-hidden': hidden,
          'Day-current': current,
          'Day-selected': selected,
          'Day-disabled': disabled,
        })}
        data-test-automation-class={
          hidden ? 'date-picker-hidden-day' : 'date-picker-day'
        }
        data-test-automation-value={children}
        {...rest}
      >
        <>
          {
            // TODO: that <></> will fix when `RcIconButton` ready
            children
          }
        </>
      </StyledDay>
    );
  },
);

_Day.displayName = 'RcDay';

_Day.defaultProps = {
  disabled: false,
  hidden: false,
  current: false,
  selected: false,
};

const Day = memo(_Day);

export { Day, DayProps };
