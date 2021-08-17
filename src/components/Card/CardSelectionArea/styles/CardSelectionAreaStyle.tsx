import {
  css,
  nonTouchHoverMedia,
  palette2,
  px,
  radius,
  RcThemedStyled,
  setOpacity,
  shadows,
  spacing,
} from '../../../../foundation';
import { RcIconButtonSizes } from '../../../Buttons/IconButton/utils';
import { RcCardSelectionAreaProps } from '../CardSelectionArea';
import { RcCardSelectionAreaClasses } from '../utils';

export const CardSelectionAreaStyle: RcThemedStyled<
  RcCardSelectionAreaProps,
  any
> = () => {
  const innerCircleSize = RcIconButtonSizes.small;

  return css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0;

    ${nonTouchHoverMedia} {
      &&:hover {
        background-color: ${setOpacity(palette2('action', 'grayLight'), '08')};
      }
    }

    .${RcCardSelectionAreaClasses.iconOuterCircle} {
      position: absolute;
      right: 0;
      top: 0;
      margin: ${spacing(2)};
      border-radius: ${radius('circle')};
      padding: ${spacing(1)};
      background-color: ${palette2('neutral', 'b01')};
      box-shadow: ${shadows('1')};

      .${RcCardSelectionAreaClasses.iconInnerCircle} {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        height: ${px(innerCircleSize)};
        width: ${px(innerCircleSize)};
        border-radius: ${radius('circle')};
        border: 1px solid ${palette2('interactive', 'f01')};
        background-color: ${palette2('neutral', 'b01')};
      }
    }

    &.${RcCardSelectionAreaClasses.checked}
      .${RcCardSelectionAreaClasses.iconInnerCircle} {
      height: ${px(innerCircleSize)};
      width: ${px(innerCircleSize)};
      border: none;
      background-color: ${palette2('interactive', 'f01')};
    }
  `;
};
