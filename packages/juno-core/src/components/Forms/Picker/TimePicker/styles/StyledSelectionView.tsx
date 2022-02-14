import {
  css,
  flexCenterStyle,
  spacing,
  styled,
} from '../../../../../foundation';
import { RcClickFiledStyleProps } from '../TimePicker';
import { RcTimePickerUtils } from '../utils';

export const StyledSelectionView = styled.div<RcClickFiledStyleProps>`
  ${({ size }) => {
    const { width, height } = RcTimePickerUtils[size!];

    return css`
      ${flexCenterStyle};
      box-sizing: border-box;
      padding: ${spacing(2)};
      flex-wrap: wrap;
      width: ${width};
      height: ${height};
      margin: ${spacing(-3, -4)};
    `;
    /** reset wrapper margin */
  }};
`;
