import {
  css,
  palette2,
  RcThemedStyled,
  spacing,
  styled,
  typography,
} from '../../../../foundation';
import { RcIcon } from '../../../Icon';
import { ListItemFormControlStyle } from '../../../List/ListItem/styles';
import { RcMenuItemProps } from '../MenuItem';
import {
  RcMenuItemClasses,
  RcMenuItemLeftAndRightPaddings,
  RcMenuItemTopAndBottomPaddings,
} from '../utils';

export const StyledCheckIcon = styled(RcIcon)`
  height: 22px;
`;

export const MenuItemStyle: RcThemedStyled<RcMenuItemProps, any> = ({
  size,
}) => {
  const topAndBottomPadding = RcMenuItemTopAndBottomPaddings[size!];
  const leftAndRightPadding = RcMenuItemLeftAndRightPaddings[size!];

  return css`
    outline: none;
    box-sizing: border-box;
    ${typography('body1')};
    color: ${palette2('neutral', 'f06')};
    height: auto;
    min-height: 32px;
    min-width: 112px;
    padding-top: ${topAndBottomPadding};
    padding-bottom: ${topAndBottomPadding};

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

    ${ListItemFormControlStyle};
  `;
};
