import { css, RcThemedStyled } from '../../../foundation';
import { RcVirtualizedMenuClasses } from '../utils';
import { RcVirtualizedMenuProps } from '../VirtualizedMenu';

export const VirtualizedMenuStyle: RcThemedStyled<RcVirtualizedMenuProps, any> =
  () => {
    // * that is not need be scrollable, we use vl scroll container
    return css`
      .${RcVirtualizedMenuClasses.paper} {
        max-height: calc(100% - 96px);
        -webkit-overflow-scrolling: touch;
        overflow: hidden;
      }
    `;
  };
