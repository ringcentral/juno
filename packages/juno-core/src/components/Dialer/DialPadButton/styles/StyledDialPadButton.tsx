import { css, palette2 } from '../../../../foundation';
import { RcIcon } from '../../../Icon';

export const buttonWrapperStyle = css`
  ${RcIcon} {
    svg {
      path:first-child {
        fill: ${palette2('neutral', 'f06')};
      }
      path:nth-child(2) {
        fill: ${palette2('neutral', 'f04')};
      }
    }
  }
`;
