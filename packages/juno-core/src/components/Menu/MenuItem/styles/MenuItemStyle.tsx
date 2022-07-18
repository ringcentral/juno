import { css, RcThemedStyled, spacing, styled } from '../../../../foundation';
import { RcIcon } from '../../../Icon';
import { sharedListItemStyle } from '../../../List/ListItem/styles';
import { RcMenuItemProps } from '../MenuItem';
import {
  RcMenuItemClasses,
  RcMenuItemLeftAndRightPaddings,
  RcMenuItemRippleClasses,
  RcMenuItemTopAndBottomPaddings,
} from '../utils';

export const StyledCheckIcon = styled(RcIcon)`
  height: 22px;
`;

export const MenuItemStyle: RcThemedStyled<RcMenuItemProps, any> = (props) => {
  const { size, color = 'action.grayLight' } = props;
  const topAndBottomPadding = RcMenuItemTopAndBottomPaddings[size!];
  const leftAndRightPadding = RcMenuItemLeftAndRightPaddings[size!];

  return css`
    outline: none;
    box-sizing: border-box;
    height: auto;
    min-height: 32px;
    min-width: 112px;
    padding-top: ${topAndBottomPadding};
    padding-bottom: ${topAndBottomPadding};

    ${sharedListItemStyle({
      ...props,
      color,
      // in menuItem always be can hover
      canHover: true,
      mainClasses: RcMenuItemClasses,
      rippleClasses: RcMenuItemRippleClasses,
    })};

    .${RcMenuItemClasses.gutters} {
      padding-left: ${leftAndRightPadding};
      padding-right: ${leftAndRightPadding};
    }

    &.${RcMenuItemClasses.dense} {
      padding-top: ${spacing(1)};
      padding-bottom: ${spacing(1)};
      min-height: auto;
      line-height: 22px;
      font-weight: 700;
    }
  `;
};
