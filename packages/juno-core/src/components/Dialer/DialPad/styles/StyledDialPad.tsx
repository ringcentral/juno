import { css, RcThemedStyled } from '../../../../foundation';
import { RcIcon } from '../../../Icon';
import { RcDialPadButton } from '../../DialPadButton';
import { RcDialPadProps } from '../DialPad';

const itemScale = `27.59%`;

export const DialPadStyle: RcThemedStyled<RcDialPadProps, any> = ({
  autoSize = true,
}) => {
  return css`
    display: flex;
    flex-wrap: wrap;

    ${autoSize &&
    css`
      justify-content: space-between;

      ${RcDialPadButton} {
        width: ${itemScale};
        height: 0;
        padding-top: ${itemScale};

        ${RcIcon} {
          position: absolute;
          top: 0;
          left: 0;
          svg {
            height: 100%;
            width: 100%;
          }
        }
      }
    `}
  `;
};
