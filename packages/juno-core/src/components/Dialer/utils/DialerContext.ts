import { createContext, useContext } from 'react';

import { RcDialPadAction, RcDialPadOnChangeReason } from '../DialPad';

type RcDialerContextValue = {
  onInsertRef?: React.RefObject<
    (addValue: string, reason: RcDialPadOnChangeReason) => any
  >;
  onDeleteRef?: React.RefObject<
    (
      e:
        | React.MouseEvent<unknown, MouseEvent>
        | React.TouchEvent<unknown>
        | React.KeyboardEvent<unknown>,
      reason: RcDialPadOnChangeReason,
    ) => any
  >;
  onClearRef?: React.RefObject<
    (
      e:
        | React.MouseEvent<unknown, MouseEvent>
        | React.TouchEvent<unknown>
        | React.KeyboardEvent<unknown>,
      reason: RcDialPadOnChangeReason,
    ) => any
  >;
  dialPadActionRef?: React.RefObject<RcDialPadAction>;
  inputRef?: React.RefObject<HTMLInputElement>;
};

const RcDialerContext = createContext<RcDialerContextValue>({});

const useRcDialerContext = () => useContext(RcDialerContext);

export { RcDialerContext, useRcDialerContext };
export type { RcDialerContextValue };
