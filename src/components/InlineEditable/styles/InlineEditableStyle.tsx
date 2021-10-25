import {
  css,
  ellipsis,
  getParsePaletteColor,
  RcThemedStyled,
  typography,
} from '../../../foundation';
import { placeholderColor } from '../../Forms/TextField/styles';
import { RcInlineEditableProps } from '../InlineEditable';
import { RcInlineEditableClasses } from '../utils';
import { inputStyle, textareaStyle } from './textFieldStyle';

export const InlineEditableStyle: RcThemedStyled<
  RcInlineEditableProps,
  any
> = ({ variant, multiline, fullWidth, disabled, color }) => {
  return css`
    ${typography(variant!)};
    position: relative;
    display: inline-block;
    width: ${multiline || fullWidth ? '100%' : 'auto'};
    min-width: 32px;
    margin: -4px;
    color: ${getParsePaletteColor(color)};

    &.${RcInlineEditableClasses.saving} {
      pointer-events: none;
    }

    .${RcInlineEditableClasses.label} {
      margin: 4px;
      position: relative;
      outline: none;
      box-sizing: border-box;
      pointer-events: ${disabled ? 'initial' : 'none'};
      ${ellipsis()};
      overflow-wrap: ${multiline && 'anywhere'};
      white-space: ${multiline ? 'pre-wrap' : 'pre'};

      ${
        ''
        /*
        1. the single '\n' would be ignore in the last line. so need append ' ' after '\n' when multiline.
        2. need keep content height when placeholder is empty.
        */
      }
      ::after {
        content: ' ';
        width: 0;
        visibility: hidden;
        display: inline-block;
      }

      ${
        '' /* prevent select double content when the input has a value and not disabled (input would be removed when disabled) */
      }
      user-select: ${!disabled && 'none'};
    }

    .${RcInlineEditableClasses.placeholder} {
      ${
        '' /* prevent select placeholder when the input does not have a value */
      }
      user-select: none;
      color: ${placeholderColor};
    }

    .${RcInlineEditableClasses.textField} {
      ${multiline ? textareaStyle : inputStyle}
    }
  `;
};
