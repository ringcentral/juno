import React, { forwardRef, useMemo, useState } from 'react';

import {
  RcBaseProps,
  styled,
  useEventCallback,
  useId,
} from '../../../../foundation';
import MoreHorizIcon from '../../../../icon/MoreHoriz';
import { RcIcon } from '../../../Icon';
import { RcListItemIcon, RcListItemText } from '../../../List';
import { RcMenu, RcMenuItem, RcMenuProps } from '../../../Menu';
import { RcTooltip, RcTooltipProps } from '../../../Tooltip';
import { RcTab, RcTabProps } from '../../Tab';
import { getKey } from '../MoreMenuTabs/utils';
import { MoreMenuTabStyle } from './styles';

type MoreMenuTabProps = {
  menuItems: RcBaseProps<RcTabProps>[];
  MenuProps?: RcBaseProps<RcMenuProps, 'anchorEl' | 'open' | 'variant'>;
  TooltipProps?: RcBaseProps<RcTooltipProps, 'children'>;
  onChange?: (event: React.MouseEvent<HTMLLIElement>, value: any) => void;
  orientation?: 'horizontal' | 'vertical';
  MoreIcon?: JSX.Element;
} & RcBaseProps<RcTabProps, 'onChange'>;

const DEFAULT_MORE_MENU_TAB_LABEL = 'more_menu_tab';

const _MoreMenuTab = forwardRef<any, MoreMenuTabProps>((props, ref) => {
  const {
    menuItems,
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

  const MoreIcon = useMemo(() => {
    const Icon = MoreIconProp || (
      <RcIcon size="medium" color="neutral.f04" symbol={MoreHorizIcon} />
    );
    if (TooltipProps?.title) {
      return <RcTooltip {...(TooltipProps as any)}>{Icon}</RcTooltip>;
    }
    return Icon;
  }, [MoreIconProp, TooltipProps]);

  const handleTabClick = useEventCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
  );

  const handleMenuClose = useEventCallback(
    (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
      setAnchorEl(null);
      onMenuCloseProp?.(event, reason);
    },
  );

  const MenuList = useMemo(() => {
    if (!menuItems || menuItems.length === 0) {
      return null;
    }
    return menuItems.map((item, idx) => {
      const {
        icon,
        label,
        value,
        disabled,
        onClick,
        selected,
        ...menuItemRest
      } = item;

      const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
        onChange?.(event, value);
        onClick?.(event);
      };

      return (
        <RcMenuItem
          key={getKey(menuItemRest.key!, idx)}
          disabled={disabled}
          selected={selected}
          value={value}
          onClick={handleClick}
          data-test-automation-id={menuItemRest['data-test-automation-id']}
        >
          {icon ? <RcListItemIcon>{icon}</RcListItemIcon> : null}
          <RcListItemText primary={label || value} />
        </RcMenuItem>
      );
    });
  }, [menuItems, onChange]);

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
      />
      <RcMenu
        autoClose
        {...MenuPropsRest}
        id={menuId}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
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
