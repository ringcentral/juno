import {
  css,
  focusVisible,
  opacity,
  radius,
  RcThemedStyled,
  spacing,
} from '../../../../../foundation';
import { RcButton } from '../../../../Buttons';
import { RcIcon } from '../../../../Icon';
import { RcListItemText } from '../../../../List/ListItemText';
import { RcTextFieldClasses } from '../../../TextField/utils';
import { SelectArrowDownIcon } from '../../styles';
import { RcPlainSelectProps, RcPlainSelectPropsVariant } from '../PlainSelect';
import {
  RcPlainSelectInputClasses,
  RcPlainSelectTouchRippleClasses,
} from '../utils';

const roundVariant: RcPlainSelectPropsVariant[] = ['round', 'plainIcon'];

export const plainSelectStyle: RcThemedStyled<RcPlainSelectProps, any> = ({
  variant,
  disabled,
}) => {
  const isText = variant === 'text';

  const isRound = roundVariant.includes(variant as any);

  return css`
    width: auto;

    ${
      RcButton /**
      // TODO: cancel button bellow icon margin issue,
  */
    } {
      ${RcIcon} {
        margin-right: 0;
      }
    }

    ${RcListItemText} {
      margin-right: 0;
    }

    .${RcTextFieldClasses.root} {
      margin-bottom: 0;
    }

    .${RcPlainSelectInputClasses.root} {
      width: auto;
      pointer-events: none;
    }

    .${RcPlainSelectInputClasses.input} {
      padding: 0;
      height: auto;
    }

    ${RcButton} {
      pointer-events: ${!disabled && 'auto'};
      min-width: unset;
      padding-left: ${spacing(isText ? 4 : 1)};
      padding-right: ${spacing(isText ? 1 : 0)};
      border-radius: ${isRound && radius('xxl')};

      ${SelectArrowDownIcon} {
        margin: ${spacing(0, 0, 0, isRound ? 0 : 1)};
      }

      ${isRound &&
      css`
        padding-top: ${spacing(1.5)};
        padding-bottom: ${spacing(1.5)};

        ${focusVisible} {
          .${RcPlainSelectTouchRippleClasses.root} {
            background-color: currentColor;
            opacity: ${opacity('32')};
          }
          .${RcPlainSelectTouchRippleClasses.child} {
            display: none;
          }
        }
      `}
    }
  `;
};
