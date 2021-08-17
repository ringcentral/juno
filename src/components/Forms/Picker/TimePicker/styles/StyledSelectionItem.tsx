import {
  css,
  flexCenterStyle,
  palette2,
  spacing,
  styled,
  typography,
} from '../../../../../foundation';
import { RcClickFiledStyleProps } from '../TimePicker';
import { clickFiledStyle } from './clickFiledStyle';

type StyledSelectionItemProps = {
  isSelected?: boolean;
  /** item length of data source */
  itemLength?: number;
} & RcClickFiledStyleProps;

const selectedBgStyle = css`
  &&& {
    background-color: ${palette2('interactive', 'b02')};
    color: ${palette2('neutral', 'f01')};
  }
`;

const StyledSelectionItem = styled.div<StyledSelectionItemProps>`
  && {
    ${clickFiledStyle};
    ${typography('body1')};
    /* when itemLength is 4 which makes it to become two line, so add padding for it. */
    margin: ${({ itemLength, size }) =>
      size === 'small' && itemLength === 4 ? spacing(2) : spacing(1)};
    ${flexCenterStyle};
    ${({ isSelected }) => (isSelected ? selectedBgStyle : null)};
    color: ${({ disabled }) => disabled && palette2('disabled', 'f02')};
  }
`;

export { StyledSelectionItem, StyledSelectionItemProps };
