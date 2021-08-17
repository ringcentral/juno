import { createContext } from 'react';

export type RcMenuOnCloseReasonsType =
  | 'backdropClick'
  | 'escapeKeyDown'
  | 'tabKeyDown'
  | 'itemClick';

export type RcMenuContextType = {
  menuId: string;
  autoClose: boolean;
  focusedMenuItemId: string | null;
  setFocusedMenuItemId: React.Dispatch<React.SetStateAction<string | null>>;
  closeMenu: (event: {}, reason: RcMenuOnCloseReasonsType) => void;
};

export const RcMenuContext = createContext<RcMenuContextType>({
  menuId: '',
  autoClose: false,
  focusedMenuItemId: null,
  setFocusedMenuItemId: () => null,
  closeMenu: () => null,
});
