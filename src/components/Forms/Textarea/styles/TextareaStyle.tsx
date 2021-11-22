import {
  css,
  fakeBorder,
  nonTouchHoverMedia,
  palette2,
  RcThemedStyled,
  spacing,
} from '../../../../foundation';
import { RcTextareaProps } from '../Textarea';
import { RcTextareaInputClasses } from '../utils';

export const TextareaStyle: RcThemedStyled<RcTextareaProps, any> = ({
  disabled,
}) => {
  return css`
    .${RcTextareaInputClasses.inputMultiline} {
      margin: ${spacing(1)} 0 0 0;

      background: ${palette2('neutral', 'b03')};
      ${fakeBorder()};
      ${!disabled &&
      css`
        ${nonTouchHoverMedia} {
          &:hover {
            background: transparent;
          }
        }
      `};
    }

    .${RcTextareaInputClasses.root} {
      padding: 0;
    }
  `;
};
