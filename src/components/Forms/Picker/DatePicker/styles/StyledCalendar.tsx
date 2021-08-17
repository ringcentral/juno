import MuiTypography from '@material-ui/core/Typography';
import MuiSlideTransition from '@material-ui/pickers/views/Calendar/SlideTransition';

import {
  css,
  fakeBorder,
  flexCenterStyle,
  palette2,
  spacing,
  styled,
  typography,
} from '../../../../../foundation';
import { RcDatePickerProps } from '../DatePicker';
import { RcDatePickerSizes } from '../utils';

const CalendarSlideTransitionWrapper = styled(MuiSlideTransition)`
  min-height: 160px;
  margin: 0 0 12px;
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeekWrapper = styled.div<Pick<RcDatePickerProps, 'size'>>`
  display: flex;
  justify-content: center;

  ${({ size }) => {
    if (size === 'small') {
      return css`
        height: 28px;
      `;
    }
    return css`
      height: 32px;

      & > div:not(:first-child) {
        margin-left: 4px;
      }
    `;
  }};
`;

const StyledDaysHeader = styled.div`
  ${flexCenterStyle};
  height: 32px;
`;

type StyledDayLabelProps = Pick<RcDatePickerProps, 'size'>;

const StyledDayLabel = styled(MuiTypography)<StyledDayLabelProps>`
  ${({ size }) => {
    if (size === 'small') {
      return css`
        &:not(:first-child) {
          margin-left: 2px;
        }
      `;
    }
    return css`
      width: 32px;

      &:not(:first-child) {
        margin-left: 4px;
      }
    `;
  }}

  text-align: center;
  ${typography('caption1')};
  color: ${palette2('neutral', 'f04')};
`;

const DatePickerWrapper = styled.div<Pick<RcDatePickerProps, 'size'>>`
  ${({ size }) => {
    const { width, height } = RcDatePickerSizes[size!];
    return css`
      width: ${width};
      height: ${height};
    `;
  }};

  box-sizing: border-box;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  background-color: ${palette2('neutral', 'elevation')};
  ${fakeBorder()};
  overflow: hidden;
`;

const DaysWrapper = styled.div`
  min-height: 216px;
`;

const DayFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${spacing(3)};
  left: 0;
  width: 100%;
`;

export {
  CalendarSlideTransitionWrapper,
  DatePickerWrapper,
  DayFooterWrapper,
  StyledDayLabel,
  StyledDaysHeader,
  DaysWrapper,
  ProgressContainer,
  WeekWrapper,
};
