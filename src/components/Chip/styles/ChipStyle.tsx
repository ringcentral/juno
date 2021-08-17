import {
  css,
  ellipsis,
  fakeBorder,
  FakeBorderOption,
  focusVisible,
  focusVisibleColor,
  nonTouchHoverMedia,
  palette2,
  radius,
  RcThemedStyled,
  setOpacity,
  spacing,
  typography,
} from '../../../foundation';
import { disabledColor, textColor } from '../../Forms/TextField/styles';
import { RcChipProps } from '../Chip';
import { RcChipClasses } from '../utils';

const defaultBgColor = palette2('action', 'grayDark');
const errorBgColor = palette2('danger', 'f02');

function fakePseudoRoundBorder(addOptions?: FakeBorderOption) {
  return fakeBorder({ pseudo: true, radius: 'round', ...addOptions });
}

export const ChipStyle: RcThemedStyled<RcChipProps, any> = (props) => {
  const { isError, error = isError } = props;

  return css`
    height: 28px;
    box-sizing: border-box;
    padding: ${spacing(0.5)};
    background-color: ${palette2('neutral', 'b03')};
    color: ${textColor};
    position: relative;
    border-radius: ${radius('round')};
    ${ellipsis};

    ${typography('body1')};
    ${fakePseudoRoundBorder()};

    ${focusVisible} {
      ${fakePseudoRoundBorder({ color: focusVisibleColor })};

      background-color: ${setOpacity(
        error ? errorBgColor : defaultBgColor,
        '08',
      )};
    }

    ${nonTouchHoverMedia} {
      &:hover {
        background-color: ${setOpacity(defaultBgColor, '12')};
      }
    }

    &:focus {
      background-color: ${setOpacity(defaultBgColor, '16')};
    }

    &:active {
      background-color: ${setOpacity(defaultBgColor, '24')};
    }

    &.${RcChipClasses.disabled} {
      color: ${disabledColor};
      opacity: 1;
    }

    ${error &&
      css`
        &:not(.${RcChipClasses.disabled}) {
          color: ${palette2('danger', 'f02')};
          ${fakePseudoRoundBorder({ color: palette2('danger', 'f02') })};

          background-color: ${palette2('danger', 'b01')};

          ${nonTouchHoverMedia} {
            &:hover {
              background-color: ${setOpacity(errorBgColor, '08')};
            }
          }

          &:focus {
            background-color: ${setOpacity(errorBgColor, '16')};
          }

          &:active {
            background-color: ${setOpacity(errorBgColor, '24')};
          }
        }
      `};

    .${RcChipClasses.avatar} {
      color: ${palette2('neutral', 'b01')};
      margin-left: 0px;
      margin-right: -4px;

      span {
        width: auto;
        height: auto;
      }
    }
  `;
};
