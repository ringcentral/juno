import React, {
  ComponentProps,
  forwardRef,
  memo,
  useMemo,
  useState,
} from 'react';

import MuiMenu from '@material-ui/core/Menu';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useEventCallback,
  useId,
  useRcPortalWindowContext,
  useThemeProps,
} from '../../../foundation';
import type {
  RcMenuContextType,
  RcMenuOnCloseReasonsType,
} from './MenuContext';
import { RcMenuContext } from './MenuContext';
import { MenuStyle } from './styles';
import { RcMenuClasses } from './utils';

type RcMenuProps = {
  /** auto close menu when menu item clicked */
  autoClose?: boolean;
  /** emit when menu closed */
  onClose?: (event: {}, reason: RcMenuOnCloseReasonsType) => void;
} & RcBaseProps<
  ComponentProps<typeof MuiMenu>,
  'disableEnforceFocus' | 'onClose'
>;

const MemoMuiMenu = memo(MuiMenu);

const _RcMenu = forwardRef<any, RcMenuProps>((inProps: RcMenuProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcMenu' });
  const { classes: classesProp, children, autoClose, onClose, ...rest } = props;
  const [focusedMenuItemId, setFocusedMenuItemId] = useState(null);
  const id = useId('menu-', true);

  const { externalWindow } = useRcPortalWindowContext();

  const classes = useMemo(
    () => combineClasses(RcMenuClasses, classesProp),
    [classesProp],
  );

  const handleClose = useEventCallback(
    (event: {}, reason: RcMenuOnCloseReasonsType) => {
      onClose?.(event, reason);
    },
  );

  const ctxValue: RcMenuContextType = useMemo(
    () => ({
      menuId: id,
      autoClose: !!autoClose,
      focusedMenuItemId,
      setFocusedMenuItemId,
      closeMenu: handleClose,
    }),
    [autoClose, focusedMenuItemId, handleClose, id],
  );

  return (
    <RcMenuContext.Provider value={ctxValue}>
      <MemoMuiMenu
        container={externalWindow?.document.body}
        {...rest}
        ref={ref}
        classes={classes}
        onClose={handleClose}
        disableEnforceFocus
      >
        {children}
      </MemoMuiMenu>
    </RcMenuContext.Provider>
  );
});

const RcMenu = styled(_RcMenu)`
  ${MenuStyle};
`;

RcMenu.defaultProps = {
  variant: 'selectedMenu',
  getContentAnchorEl: null,
  anchorReference: 'anchorEl',
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
};

RcMenu.displayName = 'RcMenu';

export { RcMenu, RcMenuContext };

export type { RcMenuContextType, RcMenuProps };
