import { createContext, useContext } from 'react';

export type RcCardContextType = {
  /** Card focusVisible state  */
  focusVisible?: boolean;
  /** set Card focusVisible state  */
  setFocusVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RcCardContext = createContext<RcCardContextType>({
  setFocusVisible: () => {},
});

export const useRcCardContext = () => useContext(RcCardContext);
