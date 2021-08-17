import { css, RcThemedStyled } from '../../../../foundation';
import { RcMenuProps } from '../Menu';
import { DividerInMenuStyle } from '../../MenuList/styles';

export const MenuStyle: RcThemedStyled<RcMenuProps, any> = () => {
  return css`
    ${DividerInMenuStyle};
  `;
};
