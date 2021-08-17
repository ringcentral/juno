import { css, RcThemedStyled } from '../../../../../foundation';
import { MoreMenuTabProps } from '../MoreMenuTab';

export const MoreMenuTabStyle: RcThemedStyled<MoreMenuTabProps, any> = ({
  orientation,
}) => {
  const isVertical = orientation === 'vertical';

  return css`
    position: absolute;
    bottom: 0;

    ${isVertical
      ? css`
          width: 100%;
        `
      : css`
          top: 0;
          right: 0;
        `}
  `;
};
