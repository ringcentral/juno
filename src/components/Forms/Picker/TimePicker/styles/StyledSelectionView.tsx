import {
  styled,
  css,
  flexCenterStyle,
  spacing,
} from '../../../../../foundation';
import { RcTimePickerUtils } from '../utils';
import { RcClickFiledStyleProps } from '../TimePicker';

const StyledSelectionView = styled.div<RcClickFiledStyleProps>`
  box-sizing: border-box;
  padding: ${spacing(2)};
  ${flexCenterStyle};
  flex-wrap: wrap;

  ${({ size }) => {
    const { width, height } = RcTimePickerUtils[size!];
    return css`
      width: ${width};
      height: ${height};
    `;
  }};
  // reset wrapper margin
  margin: ${spacing(-3, -4)};
`;

export { StyledSelectionView };
