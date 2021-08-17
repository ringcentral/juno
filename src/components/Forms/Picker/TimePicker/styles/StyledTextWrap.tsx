import {
  styled,
  spacing,
  typography,
  flexCenterStyle,
} from '../../../../../foundation';
import { RcClickFiledStyleProps } from '../TimePicker';
import { clickFiledStyle } from './clickFiledStyle';

const StyledTextWrap = styled.div<RcClickFiledStyleProps>`
  ${clickFiledStyle}
  ${({ size }) => size === 'medium' && typography('title1')};
  ${flexCenterStyle}
  margin: ${spacing(2, 0)};
`;

export { StyledTextWrap };
