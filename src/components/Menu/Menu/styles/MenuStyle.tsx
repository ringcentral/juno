import { css, RcThemedStyled } from '../../../../foundation';
import { DividerInMenuStyle } from '../../MenuList/styles';
import { RcMenuProps } from '../Menu';

export const MenuStyle: RcThemedStyled<RcMenuProps, any> = () => {
  return css`
    ${DividerInMenuStyle};
  `;
};
