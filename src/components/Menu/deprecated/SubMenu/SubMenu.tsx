import { Grow, Paper } from '@material-ui/core';
import { MenuItemProps as MuiMenuItemProps } from '@material-ui/core/MenuItem';
import uniqueId from 'lodash/uniqueId';
import React, {
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  ComponentProps,
} from 'react';

import {
  a11yKeyboardCode,
  combineProps,
  RcBaseProps,
  styled,
  useRcPortalWindowContext,
} from '../../../../foundation';
import ArrowRight from '../../../../icon/ArrowRight';
import { RcPopper, RcPopperProps } from '../../../Popper';
import { RcMenuContext } from '../Menu';
import { StyledMuiListItemIcon } from '../MenuItem/styles';
import { RcMenuList, RcMenuListContext, RcMenuListProps } from '../MenuList';
import { StyledSubMenuItem } from './styles';
import { StyledRcIconography, StyledTitle } from './styles/StyledSubMenuItem';

type RcSubMenuProps = {
  /** SubMenuItem's title */
  title: string;
  /** children */
  children: React.ReactNode;
  /** title's icon */
  titleIcon?: React.ReactElement;
  /** automationId */
  automationId?: string;
  /** popperId */
  popperId?: string;
  /** popper props */
  PopperProps?: Partial<RcPopperProps>;
  /** menu list props */
  MenuListProps?: Omit<Partial<RcMenuListProps>, 'autoFocusItem'>;
} & RcBaseProps<MuiMenuItemProps>;

const KeyboardCode = a11yKeyboardCode;

const POPPER_OFFSET = 2;

type SubMenuContextType = {
  autoClose: boolean;
  closeSubMenu: () => void;
};

const SubMenuContext = React.createContext<SubMenuContextType>({
  autoClose: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  closeSubMenu: () => {},
});

const _RcSubMenu: FunctionComponent<RcSubMenuProps> = (
  props: RcSubMenuProps,
) => {
  const {
    popperId,
    title,
    titleIcon,
    disabled,
    automationId,
    onKeyDown,
    onClick,
    onMouseEnter,
    onMouseLeave,
    PopperProps,
    MenuListProps,
    ...rest
  } = props;

  const _popperRef = useRef<HTMLDivElement>(null);
  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(
    null,
  );
  const [open, setOpen] = useState<boolean>(false);
  const menuContext = useContext(RcMenuContext);
  const menuListContext = useContext(RcMenuListContext);

  const { externalWindow } = useRcPortalWindowContext();

  const [menuItemUUID, setMenuItemUUID] = useState<string | undefined>(
    undefined,
  );
  useEffect(() => {
    if (!menuListContext.isMenuList) {
      menuListContext.setIsMenuList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setMenuItemUUID(uniqueId('rc-sub-menu-item-'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const titleItem = useMemo(
    () =>
      titleIcon ? (
        <StyledTitle>
          <StyledMuiListItemIcon>{titleIcon}</StyledMuiListItemIcon>
          {title}
        </StyledTitle>
      ) : (
        title
      ),
    [title, titleIcon],
  );

  const openPopper = useCallback(
    (event: React.MouseEvent | React.KeyboardEvent) => {
      if (!props.disabled) {
        setAnchorEl(event.currentTarget);
        setOpen(true);
      }

      if (!menuItemUUID) {
        return;
      }
      if (menuListContext.isMenuList) {
        menuListContext.setFocusedMenuItemId(menuItemUUID);
      } else {
        menuContext.setFocusedMenuItemId(menuItemUUID);
      }
    },
    [menuContext, menuItemUUID, menuListContext, props.disabled],
  );

  const closePopper = useCallback(() => {
    setAnchorEl(null);
    setOpen(false);
  }, []);

  useEffect(() => {
    if (
      menuListContext.isMenuList &&
      menuListContext.focusedMenuItemId !== menuItemUUID
    ) {
      anchorEl && (anchorEl as HTMLElement).focus();
      closePopper();
    }
  }, [
    anchorEl,
    closePopper,
    menuItemUUID,
    menuListContext.focusedMenuItemId,
    menuListContext.isMenuList,
  ]);

  useEffect(() => {
    if (
      !menuListContext.isMenuList &&
      menuContext.focusedMenuItemId !== menuItemUUID
    ) {
      anchorEl && (anchorEl as HTMLElement).focus();
      closePopper();
    }
  }, [
    anchorEl,
    closePopper,
    menuItemUUID,
    menuContext.focusedMenuItemId,
    menuListContext.isMenuList,
  ]);

  const handleSubMenuItemKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLLIElement>) => {
      if (
        e.keyCode === KeyboardCode.Escape ||
        e.keyCode === KeyboardCode.ArrowLeft
      ) {
        closePopper();
      } else if (e.keyCode === KeyboardCode.ArrowRight) {
        openPopper(e);
      }
      onKeyDown && onKeyDown(e);
    },
    [closePopper, onKeyDown, openPopper],
  );

  const handleSubMenuItemClick = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      e.preventDefault();
      open ? closePopper() : openPopper(e);
      onClick && onClick(e);
    },
    [closePopper, onClick, open, openPopper],
  );

  const handleSubMenuItemMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      openPopper(e);
      onMouseEnter && onMouseEnter(e);
    },
    [onMouseEnter, openPopper],
  );

  const handleSubMenuItemMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      onMouseLeave && onMouseLeave(e);
      anchorEl && (anchorEl as HTMLElement).focus();

      if (!_popperRef.current || !e.currentTarget) {
        return;
      }

      const { clientX } = e;
      const { left, width } = _popperRef.current.getBoundingClientRect();
      const isMoveToPopper =
        left < clientX + POPPER_OFFSET &&
        clientX - POPPER_OFFSET < left + width;

      !isMoveToPopper && closePopper();
    },
    [anchorEl, closePopper, onMouseLeave],
  );

  useEffect(() => {
    if (!menuContext.open) {
      closePopper();
    }
  }, [closePopper, menuContext]);

  const handlePopperKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      e.stopPropagation();
      if (e.keyCode === KeyboardCode.ArrowLeft) {
        anchorEl && (anchorEl as HTMLElement).focus();
        closePopper();
      }
      if (e.keyCode === KeyboardCode.Escape) {
        menuContext.closeMenu(e, 'tabKeyDown');
      }
    },
    [anchorEl, closePopper, menuContext],
  );

  const handlePopperMouseClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const handlePopperMouseLeave = useCallback(() => {
    closePopper();
  }, [closePopper]);

  const handleMenuListKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.keyCode === KeyboardCode.Tab) {
        e.preventDefault();
        menuContext.closeMenu(e, 'tabKeyDown');
      }
    },
    [menuContext],
  );

  const _handleClickAway = useCallback(
    (event: MouseEvent) => {
      if (!_popperRef.current || !event.target) {
        return;
      }

      const { clientX, clientY } = event;
      const {
        left,
        top,
        width,
        height,
      } = _popperRef.current.getBoundingClientRect();
      const isClickInside =
        left < clientX &&
        clientX < left + width &&
        top < clientY &&
        clientY < top + height;
      if (isClickInside) {
        return;
      }
      const isClickOutSide =
        !_popperRef.current.contains(event.target as HTMLElement) &&
        _popperRef.current !== event.target;
      if (isClickOutSide) {
        closePopper();
      }
    },
    [closePopper],
  );

  const _handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event && event.keyCode === KeyboardCode.Escape) {
        closePopper();
      }
    },
    [closePopper],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('click', _handleClickAway);
      document.addEventListener('keydown', _handleKeyDown);
    }

    return () => {
      document.removeEventListener('click', _handleClickAway);
      document.removeEventListener('keydown', _handleKeyDown);
    };
  }, [open, _handleClickAway, _handleKeyDown]);

  const ctxValue: SubMenuContextType = useMemo(
    () => ({
      autoClose: !!menuListContext.autoClose,
      closeSubMenu: closePopper,
    }),
    [closePopper, menuListContext.autoClose],
  );

  const menuListProps = useMemo(
    () =>
      combineProps(
        {
          onKeyDown: handleMenuListKeyDown,
        },
        MenuListProps,
      ),
    [MenuListProps, handleMenuListKeyDown],
  );

  const modifiers: ComponentProps<typeof RcPopper>['modifiers'] = useMemo(
    () => ({
      flip: {
        enabled: true,
      },
      preventOverflow: {
        enabled: true,
        boundariesElement: externalWindow ? 'window' : 'viewport',
      },
    }),
    [externalWindow],
  );

  return (
    <>
      <StyledSubMenuItem
        {...(rest as any)}
        disabled={disabled}
        onClick={handleSubMenuItemClick}
        onMouseEnter={handleSubMenuItemMouseEnter}
        onMouseLeave={handleSubMenuItemMouseLeave}
        onKeyDown={handleSubMenuItemKeyDown}
        data-test-automation-id={automationId}
        data-menuitem-uuid={menuItemUUID}
      >
        {titleItem}
        <StyledRcIconography
          size="medium"
          color={['neutral', 'f04']}
          symbol={ArrowRight}
        />
      </StyledSubMenuItem>
      <RcPopper
        role="menu"
        id={popperId}
        ref={_popperRef}
        open={open}
        anchorEl={anchorEl}
        placement="right-start"
        data-test-automation-id={automationId}
        transition
        modifiers={modifiers}
        onClick={handlePopperMouseClick}
        onMouseLeave={handlePopperMouseLeave}
        onKeyDown={handlePopperKeyDown}
        container={externalWindow?.document.body}
        {...PopperProps}
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            timeout="auto"
            style={{
              transformOrigin: 'center top',
            }}
          >
            <Paper>
              <SubMenuContext.Provider value={ctxValue}>
                <RcMenuList {...menuListProps} autoFocusItem>
                  {props.children}
                </RcMenuList>
              </SubMenuContext.Provider>
            </Paper>
          </Grow>
        )}
      </RcPopper>
    </>
  );
};

/** @release */
const RcSubMenu = styled(_RcSubMenu)``;

RcSubMenu.displayName = 'RcSubMenu';

export { RcSubMenu, RcSubMenuProps, SubMenuContext as RcSubMenuContext };
