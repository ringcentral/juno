import MuiMenu from '@material-ui/core/Menu';
import React, {
  ComponentProps,
  forwardRef,
  memo,
  useMemo,
  useState,
} from 'react';

import {
  RcBaseProps,
  styled,
  useEventCallback,
  useRcPortalWindowContext,
  withDeprecatedCheck,
} from '../../../../foundation';
import { StyledMenu } from './styles';

type RcMenuProps = {
  autoClose?: boolean;
  /** @deprecated use autoClose to replace that */
  enableCloseMenuWhenItemClicked?: boolean;
} & RcBaseProps<ComponentProps<typeof MuiMenu>>;

type CloseReasonType = 'backdropClick' | 'escapeKeyDown' | 'tabKeyDown';

type MenuContextType = {
  autoClose: boolean;
  open: boolean;
  closeMenu: (event: {}, reason: CloseReasonType) => void;
  focusedMenuItemId: string;
  setFocusedMenuItemId: (id: string) => void;
};

const MenuContext = React.createContext<MenuContextType>({
  autoClose: false,
  open: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  closeMenu: (event: {}, reason: CloseReasonType) => {},
  focusedMenuItemId: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setFocusedMenuItemId: (id: string) => {},
});

// TODO: should use ref to refactor this menu logic with focus item set
const MemoMenu = memo(StyledMenu);

const _RcMenu = forwardRef<any, RcMenuProps>(
  (
    {
      onClose,
      open,
      enableCloseMenuWhenItemClicked,
      autoClose = enableCloseMenuWhenItemClicked,
      children,
      ...rest
    },
    ref,
  ) => {
    const [focusedMenuItemId, setFocusedMenuItemId] = useState('');
    const { externalWindow } = useRcPortalWindowContext();

    const handleClose = useEventCallback(
      (event: {}, reason: CloseReasonType) => {
        onClose?.(event, reason as Exclude<CloseReasonType, 'tabKeyDown'>);
      },
    );

    const ctxValue: MenuContextType = useMemo(
      () => ({
        autoClose: !!autoClose,
        open,
        closeMenu: handleClose,
        focusedMenuItemId,
        setFocusedMenuItemId: (id: string) => setFocusedMenuItemId(id),
      }),
      [autoClose, focusedMenuItemId, handleClose, open],
    );

    return (
      <MenuContext.Provider value={ctxValue}>
        <MemoMenu
          container={externalWindow?.document.body}
          {...rest}
          open={open}
          ref={ref}
          onClose={handleClose}
          disableEnforceFocus
        >
          {children}
        </MemoMenu>
      </MenuContext.Provider>
    );
  },
);

/** @release */
const RcMenu = styled(
  withDeprecatedCheck(
    _RcMenu,
    [
      {
        prop: 'enableCloseMenuWhenItemClicked',
        time: '2021-2',
        comment: `use autoClose to replace that `,
      },
    ],
    'RcMenu',
  ),
)``;

RcMenu.displayName = 'RcMenu';

RcMenu.defaultProps = {
  getContentAnchorEl: null,
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
};

export { RcMenu, RcMenuProps, MenuContext as RcMenuContext };
