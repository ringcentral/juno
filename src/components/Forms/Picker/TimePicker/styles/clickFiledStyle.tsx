import {
  css,
  focusVisible,
  palette2,
  setOpacity,
  spacing,
} from '../../../../../foundation';
import { HALF_DAY_HOURS, RcTimePickerIconWidths } from '../utils';
import { StyledSelectionItemProps } from './StyledSelectionItem';

const clickFiledStyle = css`
  && {
    ${({ size, itemLength }: StyledSelectionItemProps) => {
      const iconWidth = RcTimePickerIconWidths[size!];
      if (itemLength! > HALF_DAY_HOURS) {
        return css`
          width: ${iconWidth.s12};
          height: ${iconWidth.s24};
        `;
      }
      return css`
        width: ${iconWidth.s12};
        height: ${iconWidth.s12};
      `;
    }};
    border-radius: ${spacing(7)};
    text-align: center;
    user-select: none;
    ${({ disabled }) => {
      if (disabled) {
        return css`
          cursor: default;
          pointer-events: none;
        `;
      }
      return css`
        cursor: pointer;
        :hover {
          background: ${setOpacity(palette2('interactive', 'f01'), '08')};
        }
      `;
    }}
  }
`;

const clearButtonStyle = css`
  outline: none;
  background-color: transparent;
  border: 1px solid transparent;
  ${focusVisible} {
    border: 1px solid ${palette2('interactive', 'f01')};
  }
`;

export { clickFiledStyle, clearButtonStyle };
