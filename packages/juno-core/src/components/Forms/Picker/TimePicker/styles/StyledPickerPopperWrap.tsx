import {
  css,
  flexCenterStyle,
  palette2,
  spacing,
  styled,
} from '../../../../../foundation';
import { RcTimePickerProps } from '../TimePicker';
import { RcTimePickerUtils } from '../utils';

type StyledPickerPopperWrapProps = Omit<
  RcTimePickerProps,
  'value' | 'periodTexts'
>;

export const StyledPickerPopperWrap = styled.div<StyledPickerPopperWrapProps>`
  ${({ size }: StyledPickerPopperWrapProps) => {
    const { width, height } = RcTimePickerUtils[size!];

    return css`
      ${flexCenterStyle};
      box-sizing: border-box;
      width: ${width};
      height: ${height};
      padding: ${spacing(3, 4)};
      color: ${palette2('neutral', 'f06')};
    `;
  }}
`;
