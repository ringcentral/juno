import { css, palette2, radius } from '../../../foundation';
import { RcInlineEditableClasses } from '../utils';

const interactionStyle = css`
  background-color: ${palette2('neutral', 'b01')};
`;

const baseInputStyles = css`
  position: absolute;
  width: 100%;
  border: 1px solid transparent;
  padding: 2px;
  background-color: transparent;
  color: transparent;
  line-height: inherit;
  white-space: pre-wrap;
  word-break: break-all;
  box-sizing: border-box;
  font: inherit;
  outline: none;
  border-radius: ${radius('lg')};

  ::placeholder {
    font: inherit;
    opacity: 0;
    color: ${palette2('neutral', 'f03')};
  }

  &:hover {
    ${interactionStyle};
    border: 1px solid ${palette2('neutral', 'l02')};
  }

  &:focus {
    ${interactionStyle};
    border: 2px solid ${palette2('interactive', 'f01')};
    color: inherit;

    ::placeholder {
      opacity: 1;
    }

    & ~ .${RcInlineEditableClasses.label} {
      visibility: hidden;
    }
  }
`;

export const inputStyle = css`
  ${baseInputStyles}
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const textareaStyle = css`
  ${baseInputStyles};
  height: 100%;
  overflow: hidden;
  resize: none;
`;
