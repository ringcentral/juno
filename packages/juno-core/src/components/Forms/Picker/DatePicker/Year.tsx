import React, { forwardRef, memo, ReactNode, RefObject } from 'react';

import clsx from 'clsx';

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
  /** tabindex */
  tabIndex?: number;
};

const Year = memo(
  forwardRef((props: YearProps, ref: RefObject<HTMLButtonElement>) => {
    const { onSelect, value, selected, disabled, focused, children, ...rest } =
      props;
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
        radius="round"
        onClick={handleClick}
        onKeyPress={handleClick}
        ref={ref}
        selected={selected}
        aria-pressed={focused}
        size="medium"
        aria-label={yearAriaLabel}
        className={className}
        data-test-automation-class="date-picker-year"
        data-test-automation-value={children}
        {...rest}
      >
        <>
          {
            // TODO: that <></> will fix when `RcIconButton` ready
            children
          }
        </>
      </StyledYear>
    );
  }),
);

Year.displayName = 'RcYear';

export { Year };
export type { YearProps };
