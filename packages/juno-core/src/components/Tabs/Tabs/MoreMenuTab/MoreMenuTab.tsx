import React, { ComponentType, forwardRef, useMemo, useState } from 'react';

import { MoreHoriz as MoreHorizIcon } from '@ringcentral/juno-icon';

import {
  RcBaseProps,
  styled,
  useEventCallback,
  useId,
} from '../../../../foundation';
import { RcIcon } from '../../../Icon';
import { RcListItemIcon, RcListItemText } from '../../../List';
import {
  RcMenu,
  RcMenuItem,
  RcMenuItemProps,
  RcMenuProps,
} from '../../../Menu';
import type { RcMenuOnCloseReasonsType } from '../../../Menu/Menu/MenuContext';
import { RcTooltip, RcTooltipProps } from '../../../Tooltip';
import { RcTab, RcTabProps } from '../../Tab';
import { MoreMenuTabStyle } from './styles';

type MoreMenuTabProps = {
  menuItems: RcBaseProps<RcTabProps>[];
  MenuProps?: RcBaseProps<RcMenuProps, 'anchorEl' | 'open' | 'variant'>;
  /**
   * custom MenuItem render component
   */
  MenuItemComponent?: ComponentType<RcMenuItemProps>;
  TooltipProps?: RcBaseProps<RcTooltipProps, 'children'>;
  onChange?: (event: React.MouseEvent<HTMLLIElement>, value: any) => void;
  orientation?: 'horizontal' | 'vertical';
  MoreIcon?: JSX.Element | ((isMenuOpen: boolean) => JSX.Element);
} & RcBaseProps<RcTabProps, 'onChange'>;

const DEFAULT_MORE_MENU_TAB_LABEL = 'more_menu_tab';

const _MoreMenuTab = forwardRef<any, MoreMenuTabProps>((props, ref) => {
  const {
    menuItems,
    MenuItemComponent = RcMenuItem,
    MenuProps = {},
    TooltipProps,
    onChange,
    MoreIcon: MoreIconProp,
    ...rest
  } = props;
  const {
    id: menuIdProp,
    onClose: onMenuCloseProp,
    ...MenuPropsRest
  } = MenuProps;

  const menuId = useId(menuIdProp);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const MoreIcon = (() => {
    let Icon: JSX.Element;
    if (!MoreIconProp) {
      Icon = (
        <RcIcon size="medium" color="neutral.f04" symbol={MoreHorizIcon} />
      );
    } else if (typeof MoreIconProp === 'function') {
      Icon = MoreIconProp(open);
    } else {
      Icon = MoreIconProp;
    }

    if (TooltipProps?.title) {
      return <RcTooltip {...(TooltipProps as any)}>{Icon}</RcTooltip>;
    }
    return Icon;
  })();

  const handleTabClick = useEventCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
  );

  const handleMenuClose = useEventCallback(
    (event: {}, reason: RcMenuOnCloseReasonsType) => {
      setAnchorEl(null);
      onMenuCloseProp?.(event, reason);
    },
  );

  const MenuList = useMemo(() => {
    if (!menuItems || menuItems.length === 0) {
      return null;
    }
    return menuItems.map((item) => {
      const {
        icon,
        label,
        value,
        disabled,
        onClick,
        selected,
        key,
        ...menuItemRest
      } = item;

      const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
        onChange?.(event, value);
        onClick?.(event);
      };

      return (
        <MenuItemComponent
          key={key}
          disabled={disabled}
          selected={selected}
          value={value}
          onClick={handleClick}
          data-test-automation-id={menuItemRest['data-test-automation-id']}
        >
          {icon ? <RcListItemIcon>{icon}</RcListItemIcon> : null}
          <RcListItemText primary={label || value} />
        </MenuItemComponent>
      );
    });
  }, [MenuItemComponent, menuItems, onChange]);

  return (
    <>
      <RcTab
        {...rest}
        ref={ref}
        onClick={handleTabClick}
        label={MoreIcon}
        value={DEFAULT_MORE_MENU_TAB_LABEL}
        aria-haspopup="true"
        aria-controls={menuId}
        data-tab-more-button=""
      />
      <RcMenu
        autoClose
        {...MenuPropsRest}
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        variant="menu"
        onClose={handleMenuClose}
      >
        {MenuList}
      </RcMenu>
    </>
  );
});

/** inner component */
const MoreMenuTab = styled(_MoreMenuTab)`
  ${MoreMenuTabStyle}
`;

MoreMenuTab.defaultProps = {
  label: DEFAULT_MORE_MENU_TAB_LABEL,
  value: DEFAULT_MORE_MENU_TAB_LABEL,
};

MoreMenuTab.displayName = 'MoreMenuTab';

export { DEFAULT_MORE_MENU_TAB_LABEL, MoreMenuTab };

export type { MoreMenuTabProps };
