import { css, RcThemedStyled, styled } from '../../../../foundation';
import { RcListItemSecondaryAction } from '../../../List/ListItemSecondaryAction';
import { RcGrow } from '../../../Transitions/Grow';
import { RcSubMenuProps } from '../SubMenu';

export const StyledListItemSecondaryAction = styled(RcListItemSecondaryAction)`
  position: relative;
  transform: none;
  right: 0;
  top: 0;
`;

export const StyledGrow = styled(RcGrow)`
  transform-origin: center top;
`;

export const SubMenuStyle: RcThemedStyled<RcSubMenuProps, any> = () => {
  return css``;
};
