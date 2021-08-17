import {
  css,
  flexCenterStyle,
  palette2,
  shadows,
  spacing,
  styled,
  typography,
} from '../../../../../foundation';
import { RcTimePickerProps } from '../TimePicker';
import { RcTimePickerUtils } from '../utils';

const StyledPickerPopperWrap = styled.div<Pick<RcTimePickerProps, 'size'>>`
  box-shadow: ${shadows(16)};
  background-color: ${palette2('neutral', 'elevation')};

  box-sizing: border-box;
  color: ${palette2('neutral', 'f06')};
  ${({ size }) => {
    const { width, height } = RcTimePickerUtils[size!];
    return css`
      width: ${width};
      height: ${height};
    `;
  }};

  ${flexCenterStyle};
  padding: ${spacing(3, 4)};
  ${typography('subheading1')};
`;

export { StyledPickerPopperWrap };
