import React, {
  ComponentProps,
  ElementType,
  forwardRef,
  ReactElement,
  ReactNode,
  Ref,
  useContext,
  useImperativeHandle,
  useMemo,
} from 'react';

import clsx from 'clsx';

import MuiMenuItem from '@material-ui/core/MenuItem';

import {
  Classes,
  combineClasses,
  isRcElement,
  logInDev,
  omit,
  RcBaseProps,
  RcBaseSize,
  RcClassesProps,
  styled,
  useEventCallback,
  useId,
  useThemeProps,
} from '../../../foundation';
import { Check as checkSvg } from '@ringcentral/juno-icon';
import { RcIcon, RcIconProps } from '../../Icon';
import { RcListItemSecondaryAction } from '../../List';
import { RcListItemAvatar } from '../../List/ListItemAvatar';
import { RcListItemIcon } from '../../List/ListItemIcon';
import { withTooltip, WithTooltipProps } from '../../Tooltip';
import { RcMenuContext } from '../Menu/MenuContext';
import { RcMenuListContext } from '../MenuList/MenuListContext';
import { RcSubMenuContext } from '../SubMenu/SubMenuContext';
import { MenuItemStyle, StyledCheckIcon } from './styles';
import { RcMenuItemClasses } from './utils';

type RcMenuItemSize = RcBaseSize<'large' | 'medium'>;

type RcMenuItemType = 'checked' | 'selected';

type RcMenuItemClassesType = RcClassesProps<
  Classes<ComponentProps<typeof MuiMenuItem>> | 'checked' | 'unchecked'
>;

type RcMenuItemInnerProps = {
  /** id ref, can get menu item id */
  idRef?: Ref<string>;
  /** for subMenu component, use prevent click */
  isSubMenuItem?: boolean;
};

type RcMenuItemProps = {
  /** MenuItem size */
  size?: RcMenuItemSize;
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component?: ElementType;
  /** checked for that should render checked icon */
  type?: RcMenuItemType;
  /** if type to be `checked`, the checked prop for that should render checked icon */
  checked?: boolean;
  /** MenuItem with icon, can use `RcListItemIcon` */
  icon?: ReactNode;
  /** pass to the icon, can use RcIcon with symbol prop */
  symbol?: RcIconProps['symbol'];
  /** MenuItem with avatar, can use ListItemAvatar */
  avatar?: ReactElement;
  /** MenuItem with subAction, can use ListItemSecondaryAction */
  secondaryAction?: ReactNode;
} & RcMenuItemClassesType &
  WithTooltipProps &
  RcBaseProps<ComponentProps<typeof MuiMenuItem>, 'classes' | 'title'>;

const _RcMenuItem = forwardRef<any, RcMenuItemProps & RcMenuItemInnerProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcMenuItem' });
    const {
      classes: classesProp,
      children,
      className,
      onMouseEnter,
      onClick,
      onFocus,
      size,
      type,
      checked,
      icon,
      symbol,
      avatar,
      secondaryAction,
      idRef,
      isSubMenuItem,
      title,
      ...rest
    } = props;

    const isCheckedType = type === 'checked';
    const menuItemId = useId('menu-item', true);

    const menuContext = useContext(RcMenuContext);
    const menuListContext = useContext(RcMenuListContext);
    const subMenuContext = useContext(RcSubMenuContext);

    const setFocusedMenuItemId = useEventCallback(() => {
      if (!menuItemId) return;

      if (menuListContext.menuListId) {
        menuListContext.setFocusedMenuItemId(menuItemId);
      } else if (menuContext.menuId) {
        menuContext.setFocusedMenuItemId(menuItemId);
      }
    });

    const classes = useMemo(
      () => combineClasses(RcMenuItemClasses, classesProp),
      [classesProp],
    );

    const toClasses = useMemo(
      () => omit(classes, ['checked', 'unchecked']),
      [classes],
    );

    const itemAvatar = useMemo(() => {
      if (React.isValidElement(avatar)) {
        return isRcElement(avatar, ['RcListItemAvatar']) ? (
          avatar
        ) : (
          <RcListItemAvatar>{avatar}</RcListItemAvatar>
        );
      }
      return null;
    }, [avatar]);

    const itemIcon = useMemo(() => {
      if (symbol) {
        return (
          <RcListItemIcon>
            <RcIcon size="small" symbol={symbol} />
          </RcListItemIcon>
        );
      }

      if (React.isValidElement(icon)) {
        return isRcElement(icon, ['RcListItemIcon']) ? (
          icon
        ) : (
          <RcListItemIcon>{icon}</RcListItemIcon>
        );
      }

      if (typeof icon === 'string') {
        logInDev({
          component: 'RcMenuItem',
          message: 'please use symbol to replace icon string',
        });
        return (
          <RcListItemIcon>
            <RcIcon size="small">{icon}</RcIcon>
          </RcListItemIcon>
        );
      }

      return null;
    }, [icon, symbol]);

    const itemSubAction = useMemo(() => {
      if (isCheckedType && checked) {
        return (
          <RcListItemSecondaryAction>
            <StyledCheckIcon
              size="large"
              symbol={checkSvg}
              color={['interactive', 'f01']}
            />
          </RcListItemSecondaryAction>
        );
      }

      return secondaryAction ? (
        isRcElement(secondaryAction, ['RcListItemSecondaryAction']) ? (
          secondaryAction
        ) : (
          <RcListItemSecondaryAction>
            {secondaryAction}
          </RcListItemSecondaryAction>
        )
      ) : null;
    }, [checked, isCheckedType, secondaryAction]);

    const handleMouseEnter = useEventCallback(
      (e: React.MouseEvent<HTMLLIElement>) => {
        onMouseEnter?.(e);
        setFocusedMenuItemId();
      },
    );

    const handleClick = useEventCallback(
      (e: React.MouseEvent<HTMLLIElement>) => {
        onClick?.(e);

        if (menuContext.autoClose && !isSubMenuItem) {
          menuContext.closeMenu(e, 'itemClick');
        }
        if (subMenuContext.autoClose && !isSubMenuItem) {
          subMenuContext?.closeSubMenu?.(e, 'itemClick');
        }
      },
    );

    const handleFocus = useEventCallback(
      (e: React.FocusEvent<HTMLLIElement>) => {
        setFocusedMenuItemId();
        onFocus?.(e);
      },
    );

    useImperativeHandle(idRef, () => menuItemId, [menuItemId]);

    return (
      <MuiMenuItem
        aria-checked={isCheckedType && checked ? true : undefined}
        {...rest}
        ref={ref as any}
        title={typeof title === 'string' ? title : undefined}
        classes={toClasses}
        className={clsx(className, {
          [classes!.checked]: isCheckedType && checked,
          [classes!.unchecked]: isCheckedType && !checked,
        })}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        onFocus={handleFocus}
        data-menuitem-id={menuItemId}
      >
        {itemAvatar}
        {itemIcon}
        {children}
        {itemSubAction}
      </MuiMenuItem>
    );
  },
);

const RcMenuItem = styled(withTooltip(_RcMenuItem))`
  ${MenuItemStyle};
`;

RcMenuItem.defaultProps = {
  size: 'medium',
};

RcMenuItem.displayName = 'RcMenuItem';

export { RcMenuItem };
export type {
  RcMenuItemClassesType,
  RcMenuItemProps,
  RcMenuItemSize,
  RcMenuItemType,
};
