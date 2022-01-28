import {
  css,
  palette2,
  RcThemedStyled,
  typography,
} from '../../../../../foundation';
import { RcIconButtonClasses } from '../../../../Buttons/IconButton/utils';
import { DayProps } from '../Day';
import { RcDatePickerIconWidths } from '../utils';

const CurrentDayStyle = css`
  border: 1px solid ${palette2('neutral', 'b04')};
`;

export const DayStyle: RcThemedStyled<DayProps, any> = ({
  current,
  size,
  hidden,
  selected,
}) => {
  return css`
    &.${RcIconButtonClasses.root} {
      width: ${RcDatePickerIconWidths[size!]};
      height: ${RcDatePickerIconWidths[size!]};
      margin: 0 2px;
      visibility: ${hidden && 'hidden'};
      ${typography('caption1')};
      ${current && !selected && CurrentDayStyle};
    }
  `;
};
