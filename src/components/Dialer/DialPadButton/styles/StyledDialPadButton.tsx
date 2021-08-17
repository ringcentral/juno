import { css, palette2 } from '../../../../foundation';
import { RcIcon } from '../../../Icon';

const itemScale = `27.59%`;

export const buttonWrapperStyle = css`
  && {
    width: ${itemScale};
    height: 0;
  }

  padding-top: ${itemScale};

  ${RcIcon} {
    position: absolute;
    top: 0;
    left: 0;
    svg {
      height: 100%;
      width: 100%;
      path:first-child {
        fill: ${palette2('neutral', 'f06')};
      }
      path:nth-child(2) {
        fill: ${palette2('neutral', 'f04')};
      }
    }
  }
`;
