import MuiMenuItem from '@material-ui/core/MenuItem';
import React, { forwardRef } from 'react';

import {
  css,
  palette,
  paletteContrastText,
  spacing,
  styled,
  typography,
} from '../../../../../foundation';
import { RcIcon } from '../../../../Icon';
import { StyledMenuItemActionWrapper } from '../../../MenuItemActionWrapper/styles';
import { RcMenuItemProps } from '../MenuItem';
import { RcMenuItemClasses } from '../utils/MenuItemUtil';
import { StyledMuiListItemIcon } from './StyledMuiListItemIcon';

const FilteredMenuItem = forwardRef<any, RcMenuItemProps>(
  ({ icon, symbol, avatar, maxWidth, isMember, size, ...rest }, ref) => (
    <MuiMenuItem disableGutters ref={ref} {...rest} />
  ),
);

const StyledRcIcon = styled(RcIcon)`
  margin-left: ${spacing(2)};
`;

const StyledMenuItem = styled(FilteredMenuItem)`
  outline: none;
  padding: ${({ size }) => (size === 'large' ? spacing(2, 5) : spacing(1, 4))};
  ${typography('body1')};
  color: ${palette('neutral', 'f06')};
  height: auto;
  min-height: 32px;
  min-width: 112px;
  ${({ maxWidth }) =>
    maxWidth !== undefined &&
    css`
      max-width: ${maxWidth}px;
    `}
  box-sizing: border-box;

  &.${RcMenuItemClasses.unchecked} {
    padding-right: ${spacing(12)};
  }

  &:hover {
    /* @deprecated */
    cursor: ${({ isMember }) => (isMember ? 'default' : 'pointer')};
    ${StyledMenuItemActionWrapper} {
      display: block;
    }
  }

  &:active {
    background-color: ${palette('interactive', 'b02')};
    color: ${paletteContrastText(palette('interactive', 'b02'))};
    ${StyledMuiListItemIcon} {
      color: ${paletteContrastText(palette('interactive', 'b02'))};
    }
  }
`;

export { StyledMenuItem, StyledMenuItemActionWrapper, StyledRcIcon };
