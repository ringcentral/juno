import React, { FunctionComponent } from 'react';

import {
  nonTouchHoverMedia,
  palette2,
  styled,
} from '../../../../../foundation';
import { RcIconButton, RcIconButtonProps } from '../../../../Buttons';
import { RcIconButtonClasses } from '../../../../Buttons/IconButton/utils';
import { DayProps } from '../Day';
import {
  disabledColor,
  primaryColor,
  primaryHoverColor,
  RcDatePickerIconWidths,
  textColor,
} from '../utils';

type StyledDayProps = Omit<DayProps, 'day' | 'onFocus'> &
  Pick<RcIconButtonProps, 'className' | 'tabIndex' | 'ref' | 'onFocus'>;

const _StyledDay: FunctionComponent<StyledDayProps> = (props) => {
  const { size, children, ...rest } = props;

  // TODO: that <></> will fix when `RcIconButton` ready
  return (
    <RcIconButton {...rest} variant="round">
      <>{children}</>
    </RcIconButton>
  );
};

export const StyledDay = styled(_StyledDay)`
  &.${RcIconButtonClasses.root} {
    width: ${({ size }) => RcDatePickerIconWidths[size!]};
    height: ${({ size }) => RcDatePickerIconWidths[size!]};
    font-size: 12px;
    margin: 0 2px;
    color: ${textColor};
    padding: 0;

    ${nonTouchHoverMedia} {
      &:hover {
        background-color: ${primaryHoverColor};
      }
    }

    &:focus {
      background-color: ${primaryHoverColor};
    }

    &.Day-hidden {
      opacity: 0;
      pointer-events: none;
    }

    &.Day-current {
      border: 1px solid ${palette2('neutral', 'b04')};
    }

    &.Day-selected {
      background-color: ${primaryColor};
      color: ${palette2('neutral', 'f01')};
      border: none;
    }

    &.Day-disabled {
      pointer-events: none;
      color: ${disabledColor};
    }
  }
`;
