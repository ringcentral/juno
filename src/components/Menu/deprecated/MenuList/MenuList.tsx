import { MenuListProps as MuiMenuListProps } from '@material-ui/core/MenuList';
import React, { FunctionComponent, useMemo, useState } from 'react';

import {
  combineClasses,
  RcBaseProps,
  RcBaseSize,
} from '../../../../foundation';
import styled from '../../../../foundation/styled-components';
import { StyledMenuList } from './styles';
import { RcMenuListClasses } from './utils';

type MenuListSize = RcBaseSize<'small' | 'large'>;

type RcMenuListProps = {
  /** setting max-Height for MenuList, when overflow, scroll */
  maxHeight?: number;
  /** @deprecated default maxHeight */
  size?: MenuListSize;
  /** @deprecated use autoClose to replace that */
  enableCloseMenuWhenItemClicked?: boolean;
  /** for subMenu have popper */
  autoClose?: boolean;
} & RcBaseProps<MuiMenuListProps>;

type MenuListContextType = {
  autoClose: boolean;
  focusedMenuItemId: string;
  setFocusedMenuItemId: (id: string) => void;
  isMenuList: boolean;
  setIsMenuList: () => void;
};

const MenuListContext = React.createContext<MenuListContextType>({
  autoClose: false,
  focusedMenuItemId: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setFocusedMenuItemId: (id: string) => {},
  isMenuList: false,
  setIsMenuList: () => {},
});

const _RcMenuList: FunctionComponent<RcMenuListProps> = (
  props: RcMenuListProps,
) => {
  const {
    classes,
    enableCloseMenuWhenItemClicked,
    autoClose = enableCloseMenuWhenItemClicked,
    ...rest
  } = props;
  const [focusedMenuItemId, setFocusedMenuItemId] = useState('');
  const [isMenuList, setIsMenuList] = useState(false);

  const ctxValue: MenuListContextType = useMemo(
    () => ({
      autoClose: !!autoClose,
      focusedMenuItemId,
      setFocusedMenuItemId: (id: string) => setFocusedMenuItemId(id),
      isMenuList,
      setIsMenuList: () => setIsMenuList(true),
    }),
    [autoClose, focusedMenuItemId, isMenuList],
  );

  return (
    <MenuListContext.Provider value={ctxValue}>
      <StyledMenuList
        classes={combineClasses(RcMenuListClasses, classes)}
        {...rest}
      />
    </MenuListContext.Provider>
  );
};

/** @release */
const RcMenuList = styled(_RcMenuList)``;

RcMenuList.displayName = 'RcMenuList';

RcMenuList.defaultProps = {};

export { RcMenuList, RcMenuListProps, MenuListContext as RcMenuListContext };
