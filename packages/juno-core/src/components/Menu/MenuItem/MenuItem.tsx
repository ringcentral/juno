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
import { Check as checkSvg } from '@ringcentral/juno-icon';

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
  combineProps,
  RcBaseFocusVariant,
} from '../../../foundation';
import { RcIcon, RcIconProps } from '../../Icon';
import { RcListItemSecondaryAction, RcListItemProps } from '../../List';
import { RcListItemAvatar } from '../../List/ListItemAvatar';
import { RcListItemIcon } from '../../List/ListItemIcon';
import { withTooltip, WithTooltipProps } from '../../Tooltip';
import { RcMenuContext } from '../Menu/MenuContext';
import { RcMenuListContext } from '../MenuList/MenuListContext';
import { RcSubMenuContext } from '../SubMenu/SubMenuContext';
import { MenuItemStyle, StyledCheckIcon } from './styles';
import { RcMenuItemClasses, RcMenuItemRippleClasses } from './utils';

type RcMenuItemSize = RcBaseSize<'large' | 'medium'>;

type RcMenuItemType = 'checked' | 'selected';

type RcMenuItemClassesType = RcClassesProps<
  | Classes<ComponentProps<typeof MuiMenuItem>>
  | 'checked'
  | 'unchecked'
  // TODO: can be removed after V5
  | 'focusVisible'
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
  /**
   * Set focus style for component.
   *
   * @default 'highlight'
   */
  focusVariant?: RcBaseFocusVariant<'highlight' | 'focusRing'>;
} & RcMenuItemClassesType &
  Pick<RcListItemProps, 'color' | 'highlighted' | 'focused'> &
  WithTooltipProps &
  RcBaseProps<ComponentProps<typeof MuiMenuItem>, 'classes' | 'title'>;

const _RcMenuItem = forwardRef<any, RcMenuItemProps & RcMenuItemInnerProps>(
  (props, ref) => {
    const {
      classes: classesProp,
      children,
      color,
      button,
      className,
      onMouseEnter,
      onClick,
      onFocus,
      highlighted,
      size,
      type,
      checked,
      icon,
      symbol,
      avatar,
      secondaryAction,
      idRef,
      isSubMenuItem,
      TouchRippleProps: TouchRipplePropsProp,
      title,
      focused,
      focusVariant,
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
      () => omit(classes, ['checked', 'unchecked', 'focusVisible']),
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
        if (process.env.NODE_ENV !== 'production') {
          logInDev({
            component: 'RcMenuItem',
            message: 'please use symbol to replace icon string',
          });
        }
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

    // * when not button can't have TouchRippleProps
    const additionProps = useMemo<Partial<RcMenuItemProps>>(
      () =>
        button
          ? {
              TouchRippleProps: combineProps(
                { classes: RcMenuItemRippleClasses },
                TouchRipplePropsProp,
              ),
            }
          : {},
      [TouchRipplePropsProp, button],
    );

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
        {...additionProps}
        {...rest}
        ref={ref as any}
        title={typeof title === 'string' ? title : undefined}
        classes={toClasses}
        className={clsx(className, {
          [classes!.checked]: isCheckedType && checked,
          [classes!.unchecked]: isCheckedType && !checked,
          [classes!.focusVisible]: focused,
        })}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        onFocus={handleFocus}
        data-menuitem-id={menuItemId}
        button={button as any}
      >
        {itemAvatar}
        {itemIcon}
        {children}
        {itemSubAction}
      </MuiMenuItem>
    );
  },
);

const RcMenuItem = styled(withTooltip(_RcMenuItem)).attrs(
  (inProps: RcMenuItemProps) => {
    const {
      // @ts-ignore
      theme,
      // Omit className, prevent duplicate className
      className,
      size = 'medium',
      button = true,
      focusVariant = 'highlight',
      ...rest
    } = useThemeProps({ props: inProps, name: 'RcMenuItem' });

    return {
      size,
      button,
      focusVariant,
      ...rest,
    };
  },
)`
  ${MenuItemStyle};
`;

RcMenuItem.displayName = 'RcMenuItem';

export { RcMenuItem };
export type {
  RcMenuItemClassesType,
  RcMenuItemProps,
  RcMenuItemSize,
  RcMenuItemType,
};
