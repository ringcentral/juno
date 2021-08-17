import { MenuItemProps as MuiMenuItemProps } from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import uniqueId from 'lodash/uniqueId';
import React, {
  forwardRef,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  Classes,
  combineClasses,
  omit,
  RcBaseProps,
  RcBaseSize,
  RcClassesProps,
  styled,
  useEventCallback,
  withDeprecatedCheck,
} from '../../../../foundation';
import checkSvg from '../../../../icon/Check';
import { RcIcon, RcIconProps } from '../../../Icon';
import { withTooltip } from '../../../Tooltip';
import { RcMenuContext } from '../Menu';
import { RcMenuListContext } from '../MenuList';
import { RcSubMenuContext } from '../SubMenu';
import {
  StyledMenuItem,
  StyledMuiListItemIcon,
  StyledRcIcon,
  StyledRcListItemLabel,
} from './styles';
import { RcMenuItemClasses } from './utils/MenuItemUtil';

type MenuItemSize = RcBaseSize<'large' | 'medium'>;

type RcMenuItemType = 'checked' | 'selected';

type RcMenuItemClassesType = RcClassesProps<
  Classes<MuiMenuItemProps> | 'checked' | 'unchecked'
>;

type RcMenuItemProps = {
  /** MenuItem size */
  size?: MenuItemSize;
  /** MenuItem with subtext */
  subtext?: ReactNode;

  /** checked for that should render checked icon */
  type?: RcMenuItemType;
  /** if type to be `checked`, the checked prop for that should render checked icon */
  checked?: boolean;

  /** @deprecated  MenuItem with icon, pls use RcListItemIcon */
  icon?: ReactNode;
  /** @deprecated pass to the icon, pls use RcIcon with symbol prop */
  symbol?: RcIconProps['symbol'];
  /** @deprecated MenuItem with avatar, pls use ListItemAvatar */
  avatar?: React.ReactElement;
  /** @deprecated */
  label?: string;

  /** @deprecated the maxWidth of MenuItem, recommend pass classes to define it. */
  maxWidth?: number;
  /**
   * @deprecated
   * when hover on MenuItem, is cursor in shape of pointer.
   * Instead recommend using classes to define it.
   */
  isMember?: boolean;
  /**  @deprecated automationId, can use 'data-test-automation-id' replace */
  automationId?: string;
} & RcMenuItemClassesType &
  RcBaseProps<
    MuiMenuItemProps,
    'disableGutters' | 'button' | 'classes' | 'title' | 'dense' | 'divider'
  >;

const _RcMenuItem = forwardRef<any, RcMenuItemProps>((props, ref) => {
  const {
    icon,
    subtext,
    type,
    checked,
    value,
    symbol,
    children,
    disabled,
    classes,
    isMember,
    avatar,
    automationId,
    maxWidth,
    size,
    label,
    className,
    onMouseEnter,
    onClick,
    ...rest
  } = props;

  const isCheckedType = type === 'checked';

  const iconElement = useMemo(() => {
    if (React.isValidElement(avatar)) {
      return avatar;
    }
    if (symbol) {
      return <RcIcon size="small" symbol={symbol} />;
    }
    if (React.isValidElement(icon)) {
      return icon;
    }
    if (typeof icon === 'string') {
      return <RcIcon size="small">{icon}</RcIcon>;
    }
    return null;
  }, [avatar, icon, symbol]);

  const renderSubText = useMemo(() => {
    if (!isCheckedType) {
      return subtext;
    }
    return checked ? (
      <StyledRcIcon
        size="large"
        symbol={checkSvg}
        color={['interactive', 'f01']}
      />
    ) : (
      subtext
    );
  }, [checked, isCheckedType, subtext]);

  const [menuItemUUID, setMenuItemUUID] = useState<string | undefined>(
    undefined,
  );

  const menuContext = useContext(RcMenuContext);
  const menuListContext = useContext(RcMenuListContext);
  const subMenuContext = useContext(RcSubMenuContext);

  useEffect(() => {
    if (!menuListContext.isMenuList) {
      menuListContext.setIsMenuList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setMenuItemUUID(uniqueId('rc-menu-item-'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMenuItemMouseEnter = useEventCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      onMouseEnter && onMouseEnter(e);

      if (!menuItemUUID) {
        return;
      }
      if (menuListContext.isMenuList) {
        menuListContext.setFocusedMenuItemId(menuItemUUID);
      } else {
        menuContext.setFocusedMenuItemId(menuItemUUID);
      }
    },
  );

  const handleMenuItemClick = useEventCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      onClick && onClick(e);
      if (menuContext.autoClose) {
        menuContext.closeMenu(e, 'tabKeyDown');
      }
      if (subMenuContext.autoClose && subMenuContext.closeSubMenu) {
        subMenuContext.closeSubMenu();
      }
    },
  );

  const groupClasses = useMemo(
    () => combineClasses(RcMenuItemClasses, classes),
    [classes],
  );

  const toClasses = useMemo(
    () => omit(groupClasses!, ['checked', 'unchecked']),
    [groupClasses],
  );

  return (
    <StyledMenuItem
      data-test-automation-id={automationId}
      disabled={disabled}
      isMember={isMember}
      data-disabled={disabled}
      maxWidth={maxWidth}
      ref={ref}
      size={size}
      value={value}
      {...rest}
      classes={toClasses}
      onMouseEnter={handleMenuItemMouseEnter}
      onClick={handleMenuItemClick}
      className={clsx(className, {
        [groupClasses!.checked]: isCheckedType && checked,
        [groupClasses!.unchecked]: isCheckedType && !checked,
      })}
    >
      {iconElement && (
        <StyledMuiListItemIcon>{iconElement}</StyledMuiListItemIcon>
      )}
      {label && <StyledRcListItemLabel>{label}&nbsp;</StyledRcListItemLabel>}
      {children}
      {renderSubText}
    </StyledMenuItem>
  );
});

/** @release */
const RcMenuItem = styled(
  withDeprecatedCheck(
    withTooltip(_RcMenuItem),
    [
      {
        prop: 'isMember',
        time: '2021-1',
        comment:
          'isMember used for when hover on MenuItem, is cursor in shape of pointer. Please instead recommend using classes to define it.',
      },
      {
        prop: 'maxWidth',
        time: '2021-1',
        comment: 'Please instead recommend using classes to define it.',
      },
      {
        prop: 'label',
        time: '2021-1',
        comment: 'Please add label component and add to children prop',
      },
    ],
    'RcMenuItem',
  ),
)``;

RcMenuItem.displayName = 'RcMenuItem';

RcMenuItem.defaultProps = {
  size: 'medium',
};

export { RcMenuItem, RcMenuItemProps, RcMenuItemType, RcMenuItemClassesType };
