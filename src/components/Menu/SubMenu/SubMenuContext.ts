import { createContext } from 'react';
import { RcMenuOnCloseReasonsType } from '../Menu/MenuContext';
import { RcMenuListOnCloseReasonsType } from '../MenuList/MenuListContext';

export type RcSubMenuOnCloseReasonsType =
  | RcMenuListOnCloseReasonsType
  | RcMenuOnCloseReasonsType;

export type RcSubMenuContextType = {
  autoClose: boolean;
  closeSubMenu?: (e: {}, reason: RcSubMenuOnCloseReasonsType) => void;
};

export const RcSubMenuContext = createContext<RcSubMenuContextType>({
  autoClose: false,
  closeSubMenu: undefined,
});
