import { css, px, RcThemedStyled, spacing } from '../../../../foundation';
import { RcDivider } from '../../../Divider';
import { RcMenuListProps } from '../MenuList';

export const DividerInMenuStyle = css`
  ${RcDivider} {
    margin: ${spacing(2, 0)};
  }
`;

export const MenuListStyle: RcThemedStyled<RcMenuListProps, any> = ({
  maxHeight,
}) => {
  return css`
    overflow: auto;
    max-height: ${maxHeight && px(maxHeight)};
    ${DividerInMenuStyle};
  `;
};
