import { createContext } from 'react';

import { RcMenuListProps } from './MenuList';

export type RcMenuListOnCloseReasonsType =
  | 'backdropClick'
  | 'escapeKeyDown'
  | 'tabKeyDown'
  | 'itemClick'
  | 'subMenuItemAnchorMouseLeave'
  | 'subMenuItemArrowLeftKeyDown'
  | 'popperMouseLeave';

export type RcMenuListContextType = {
  menuListId: string;
  autoClose: boolean;
  focusedMenuItemId: string | null;
  setFocusedMenuItemId: React.Dispatch<React.SetStateAction<string | null>>;
  onClose: RcMenuListProps['onClose'];
};

export const RcMenuListContext = createContext<RcMenuListContextType>({
  menuListId: '',
  autoClose: false,
  focusedMenuItemId: null,
  setFocusedMenuItemId: () => null,
  onClose: undefined,
});
