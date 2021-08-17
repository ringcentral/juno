import {
  css,
  flexCenterStyle,
  focusVisible,
  focusVisibleColor,
  radius,
  RcThemedStyled,
} from '../../../../foundation';
import { RcDragHandleProps } from '../DragHandle';

export const dragHandleStyle: RcThemedStyled<RcDragHandleProps, any> = () => {
  return css`
    outline: none;
    margin-right: 4px;
    padding: 2px 0;

    ${flexCenterStyle};

    ${focusVisible} {
      box-shadow: 0 0 0 1px ${focusVisibleColor};
      border-radius: ${radius('sm')};
    }
  `;
};
