import MuiMenuList from '@material-ui/core/MenuList';
import React, {
  ComponentProps,
  forwardRef,
  memo,
  useContext,
  useMemo,
  useState,
} from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useId,
  useThemeProps,
} from '../../../foundation';
import { RcSubMenuContext } from '../SubMenu/SubMenuContext';
import {
  RcMenuListContext,
  RcMenuListContextType,
  RcMenuListOnCloseReasonsType,
} from './MenuListContext';
import { MenuListStyle } from './styles';
import { RcMenuListClasses } from './utils';

type RcMenuListProps = {
  /** setting max-Height for MenuList, when overflow, scroll */
  maxHeight?: number;
  /** auto close menu when menu item clicked */
  autoClose?: boolean;
  /** emit for subMenu closed */
  onClose?: (event: {}, reason: RcMenuListOnCloseReasonsType) => void;
} & RcBaseProps<ComponentProps<typeof MuiMenuList>>;

const MemoMuiListMenu = memo(MuiMenuList);

const _RcMenuList = forwardRef<any, RcMenuListProps>(
  (inProps: RcMenuListProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcMenuList' });
    const {
      classes: classesProp,
      children,
      autoClose,
      onClose: onCloseProp,
      ...rest
    } = props;

    const [focusedMenuItemId, setFocusedMenuItemId] = useState(null);
    const id = useId('menu-list', true);

    const classes = useMemo(
      () => combineClasses(RcMenuListClasses, classesProp),
      [classesProp],
    );

    const subMenuContext = useContext(RcSubMenuContext);

    const ctxValue: RcMenuListContextType = useMemo(
      () => ({
        menuListId: id,
        autoClose: !!autoClose || subMenuContext.autoClose,
        focusedMenuItemId,
        setFocusedMenuItemId,
        onClose: onCloseProp,
      }),
      [autoClose, focusedMenuItemId, id, onCloseProp, subMenuContext.autoClose],
    );

    return (
      <RcMenuListContext.Provider value={ctxValue}>
        <MemoMuiListMenu {...rest} ref={ref} classes={classes}>
          {children}
        </MemoMuiListMenu>
      </RcMenuListContext.Provider>
    );
  },
);

const RcMenuList = styled(_RcMenuList)`
  ${MenuListStyle};
`;

RcMenuList.defaultProps = {
  variant: 'selectedMenu',
};

RcMenuList.displayName = 'RcMenuList';

export {
  RcMenuList,
  RcMenuListProps,
  RcMenuListContext,
  RcMenuListContextType,
};
