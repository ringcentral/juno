import React, {
  ComponentProps,
  forwardRef,
  memo,
  ReactNode,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  a11yKeyboard,
  combineClasses,
  RcBaseProps,
  styled,
  useEventCallback,
  useForkRef,
  useId,
  useRcPortalWindowContext,
  useThemeProps,
} from '../../../foundation';
import ArrowRight from '../../../icon/ArrowRight';
import { ClickAwayListener } from '../../ClickAwayListener';
import { RcIcon } from '../../Icon';
import { RcListItemText } from '../../List/ListItemText';
import { RcPaper } from '../../Paper';
import { RcPopper, RcPopperProps } from '../../Popper';
import { RcMenuContext } from '../Menu/MenuContext';
import { RcMenuItem, RcMenuItemProps } from '../MenuItem/MenuItem';
import { RcMenuList, RcMenuListProps } from '../MenuList/MenuList';
import { RcMenuListContext } from '../MenuList/MenuListContext';
import {
  StyledGrow,
  StyledListItemSecondaryAction,
  SubMenuStyle,
} from './styles';
import type {
  RcSubMenuContextType,
  RcSubMenuOnCloseReasonsType,
} from './SubMenuContext';
import { RcSubMenuContext } from './SubMenuContext';
import { RcSubMenuClasses } from './utils';

type RcSubMenuProps = {
  /** SubMenuItem's title */
  title: ReactNode;
  /** children, use MenuItem array */
  children: ReactNode;
  /** Popper props */
  PopperProps?: RcBaseProps<
    RcPopperProps,
    | 'open'
    | 'anchorEl'
    | 'transition'
    | 'placement'
    | 'modifiers'
    | 'itemRef'
    | 'popperRef'
    | 'children'
  >;
  /** MenuList props */
  MenuListProps?: RcBaseProps<
    RcMenuListProps,
    'autoFocusItem' | 'ref' | 'itemRef' | 'innerRef' | 'onClose'
  >;
  /** emit when sub menu popper closed */
  onClose?: (e: {}, reason: RcSubMenuOnCloseReasonsType) => void;
} & RcBaseProps<RcMenuItemProps, 'type' | 'checked' | 'title'>;

const POPPER_OFFSET = 2;

const MemoMenuList = memo(RcMenuList);

const _RcSubMenu = forwardRef<any, RcSubMenuProps>(
  (inProps: RcSubMenuProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcSubMenu' });
    const {
      classes: classesProp,
      children,
      title: titleProp,
      disabled,
      onKeyDown,
      onMouseEnter,
      onMouseLeave,
      MenuListProps,
      PopperProps = {},
      onClose,
      ...rest
    } = props;

    const _popperRef = useRef<HTMLDivElement>(null);
    const popperRef = useForkRef(_popperRef, PopperProps!.ref || null);
    const popperId = useId(PopperProps!.id);
    const menuItemIdRef = useRef<string>(null);

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    const menuListContext = useContext(RcMenuListContext);
    const menuContext = useContext(RcMenuContext);
    const subMenuContext = useContext(RcSubMenuContext);

    const { externalWindow } = useRcPortalWindowContext();

    const handleClose = useEventCallback(
      (e: {}, reason: RcSubMenuOnCloseReasonsType) => {
        onClose?.(e, reason);
        menuListContext?.onClose?.(e, reason);
      },
    );

    const handleItemKeyDown = useEventCallback(
      (e: React.KeyboardEvent<HTMLLIElement>) => {
        const { key } = e;
        const { ArrowRight, Space, Enter } = a11yKeyboard;

        if ([ArrowRight, Space, Enter].includes(key)) {
          openPopper(e);
        }

        onKeyDown?.(e);
      },
    );

    const handleItemMouseEnter = useEventCallback(
      (e: React.MouseEvent<HTMLLIElement>) => {
        openPopper(e);
        onMouseEnter?.(e);
      },
    );

    const handleItemMouseLeave = useEventCallback(
      (e: React.MouseEvent<HTMLLIElement>) => {
        onMouseLeave?.(e);

        if (!_popperRef.current || !e.currentTarget) {
          return;
        }
        const { clientX } = e;
        const { left, width } = _popperRef.current.getBoundingClientRect();
        const isMoveToPopper =
          left < clientX + POPPER_OFFSET &&
          clientX - POPPER_OFFSET < left + width;

        if (!isMoveToPopper) {
          closePopper();
          handleClose(e, 'subMenuItemAnchorMouseLeave');
        }
      },
    );

    const classes = useMemo(
      () => combineClasses(RcSubMenuClasses, classesProp),
      [classesProp],
    );

    const title = useMemo(
      () =>
        typeof titleProp === 'string' ? (
          <RcListItemText>{titleProp}</RcListItemText>
        ) : (
          titleProp
        ),
      [titleProp],
    );

    const {
      onKeyDown: onPopperKeyDown,
      onMouseLeave: onPopperMouseLeave,
      ...restPopperProps
    } = PopperProps;

    const openPopper = useEventCallback(
      (event: React.MouseEvent | React.KeyboardEvent) => {
        if (!disabled && event.currentTarget) {
          setAnchorEl(event.currentTarget as HTMLElement);
          setOpen(true);
        }
      },
    );

    const closePopper = useEventCallback(() => {
      setOpen(false);
      setAnchorEl(null);
    });

    const handleCloseSubMenu = useEventCallback(() => {
      anchorEl?.focus();
      closePopper();
    });

    const handlePopperKeyDown = useEventCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        const { key } = e;
        const { ArrowLeft, Escape, Tab } = a11yKeyboard;

        e.stopPropagation();

        if (key === ArrowLeft) {
          handleCloseSubMenu();
          handleClose(e, 'subMenuItemArrowLeftKeyDown');
        } else if ([Escape, Tab].includes(key)) {
          const reason = key === Escape ? 'escapeKeyDown' : 'tabKeyDown';
          handleCloseSubMenu();
          menuContext.closeMenu(e, reason);
          subMenuContext?.closeSubMenu?.(e, reason);
          handleClose(e, reason);
        }

        onPopperKeyDown?.(e);
      },
    );

    const handlePopperClickAway = useEventCallback(
      (e: React.MouseEvent<Document, MouseEvent>) => {
        if (
          anchorEl &&
          e.target &&
          !anchorEl.contains(e.target as HTMLElement)
        ) {
          closePopper();
          handleClose(e, 'backdropClick');
        }
      },
    );

    const handlePopperMouseLeave = useEventCallback(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        closePopper();
        onPopperMouseLeave?.(e);

        if (!anchorEl || !e.currentTarget) {
          return;
        }

        const { clientX } = e;
        const { left, width } = anchorEl.getBoundingClientRect();
        const isMoveToAnchor =
          left < clientX + POPPER_OFFSET &&
          clientX - POPPER_OFFSET < left + width;

        if (!isMoveToAnchor) {
          handleClose(e, 'popperMouseLeave');
        }
      },
    );

    useLayoutEffect(() => {
      if (
        open &&
        menuListContext.menuListId !== '' &&
        menuListContext.focusedMenuItemId !== menuItemIdRef.current
      ) {
        /** 1. keyboard open the sub-menu
         *  2. mouse hover the sub-menu next item
         *  3. should close the sub-menu popper
         */
        handleCloseSubMenu();
      }
    }, [
      handleCloseSubMenu,
      menuListContext.focusedMenuItemId,
      menuListContext.menuListId,
      open,
    ]);

    useLayoutEffect(() => {
      if (
        open &&
        menuListContext.menuListId === '' &&
        menuContext.focusedMenuItemId !== menuItemIdRef.current
      ) {
        /**
         * 1. keyboard open the menu inner sub menu
         * 2. mouse hover the sub-menu next item
         * 3. should close all sub-menu popper
         */
        handleCloseSubMenu();
      }
    }, [
      handleCloseSubMenu,
      menuContext.focusedMenuItemId,
      menuListContext.menuListId,
      open,
    ]);

    const ctxValue: RcSubMenuContextType = useMemo(
      () => ({
        autoClose: menuListContext.autoClose,
        closeSubMenu: (e: {}, reason: RcSubMenuOnCloseReasonsType) => {
          handleCloseSubMenu();
          subMenuContext?.closeSubMenu?.(e, reason);
          menuListContext?.onClose?.(e, reason);
        },
      }),
      [handleCloseSubMenu, menuListContext, subMenuContext],
    );

    const modifiers: ComponentProps<typeof RcPopper>['modifiers'] = useMemo(
      () => ({
        flip: {
          enabled: true,
        },
        offset: {
          offset: -8,
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
        <RcMenuItem
          aria-controls={popperId}
          {...rest}
          ref={ref}
          disabled={disabled}
          classes={classes}
          onKeyDown={handleItemKeyDown}
          onMouseEnter={handleItemMouseEnter}
          onMouseLeave={handleItemMouseLeave}
          idRef={menuItemIdRef}
          isSubMenuItem
          aria-haspopup="true"
          aria-expanded={open}
        >
          {title}
          <StyledListItemSecondaryAction>
            <RcIcon size="medium" color="neutral.f04" symbol={ArrowRight} />
          </StyledListItemSecondaryAction>
        </RcMenuItem>
        <RcPopper
          role="menu"
          id={popperId}
          container={externalWindow?.document.body}
          placement="right-start"
          {...restPopperProps}
          ref={popperRef}
          open={open}
          anchorEl={anchorEl}
          transition
          modifiers={modifiers}
          onKeyDown={handlePopperKeyDown}
          onMouseLeave={handlePopperMouseLeave}
        >
          {({ TransitionProps }) => (
            <StyledGrow {...TransitionProps} timeout="auto">
              <RcPaper>
                <RcSubMenuContext.Provider value={ctxValue}>
                  <ClickAwayListener onClickAway={handlePopperClickAway}>
                    <MemoMenuList {...MenuListProps} autoFocusItem>
                      {children}
                    </MemoMenuList>
                  </ClickAwayListener>
                </RcSubMenuContext.Provider>
              </RcPaper>
            </StyledGrow>
          )}
        </RcPopper>
      </>
    );
  },
);

const RcSubMenu = styled(_RcSubMenu)`
  ${SubMenuStyle};
`;

RcSubMenu.defaultProps = {};

RcSubMenu.displayName = 'RcSubMenu';

export { RcSubMenu, RcSubMenuContext };

export type { RcSubMenuContextType, RcSubMenuProps };
