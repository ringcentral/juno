import clsx from 'clsx';
import React, { forwardRef, memo, ReactNode, RefObject } from 'react';

import { useEventCallback } from '../../../../foundation';
import { StyledYear } from './styles';
import { useScreenReaderContext } from './utils';

type YearProps = {
  /** display as content */
  children: ReactNode;
  /** is the year disabled */
  disabled?: boolean;
  /** is the year focused */
  focused?: boolean;
  /** when user select */
  onSelect: (value: number | null) => void;
  /** is the year selected */
  selected?: boolean;
  /** the value of the year */
  value: number | null;
};

const Year = memo(
  forwardRef((props: YearProps, ref: RefObject<HTMLButtonElement>) => {
    const {
      onSelect,
      value,
      selected,
      disabled,
      focused,
      children,
      ...rest
    } = props;
    const { getYearAriaLabel } = useScreenReaderContext();

    const _handleClick = useEventCallback(() => onSelect(value));

    const className = clsx({
      'Year-selected': selected,
      'Year-disabled': disabled,
    });

    const yearAriaLabel = getYearAriaLabel?.(`${value}`, selected);

    const handleClick = !disabled ? _handleClick : undefined;

    return (
      <StyledYear
        tabIndex={selected ? 0 : -1}
        onClick={handleClick}
        onKeyPress={handleClick}
        ref={ref}
        aria-pressed={focused}
        aria-label={yearAriaLabel}
        className={className}
        data-test-automation-class="date-picker-year"
        data-test-automation-value={children}
        {...rest}
      >
        {children}
      </StyledYear>
    );
  }),
);

Year.displayName = 'RcYear';

export { Year, YearProps };
