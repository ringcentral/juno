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
> = ({ variant, multiline, fullWidth, disabled, placeholder, color }) => {
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
      word-break: break-all;
      white-space: pre;

      :empty::after {
        content: ' ';
        width: 0;
        visibility: hidden;
        display: block;
      }

      ${multiline &&
        css`
          white-space: pre-wrap;

          ::after {
            content: ' ';
            width: 0;
            visibility: hidden;
            display: inline-block;
          }
        `};
    }

    .${RcInlineEditableClasses.placeholder} {
      ::after {
        content: '' !important;
        display: none !important;
      }

      color: ${placeholderColor};

      &:before {
        content: ${placeholder && `'${placeholder}'`};
      }
    }

    .${RcInlineEditableClasses.textField} {
      ${multiline ? textareaStyle : inputStyle}
    }
  `;
};
