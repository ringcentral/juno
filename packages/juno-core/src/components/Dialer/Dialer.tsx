import React, { FunctionComponent, useRef } from 'react';

import { RcDialerContext, RcDialerContextValue } from './utils';

type RcDialerProps = {};

const RcDialer: FunctionComponent<RcDialerProps> = ({ children }) => {
  const dialPadActionRef: RcDialerContextValue['dialPadActionRef'] =
    useRef(null);
  const onInsertRef: RcDialerContextValue['onInsertRef'] = useRef(null);
  const inputRef: RcDialerContextValue['inputRef'] = useRef(null);
  const onDeleteRef: RcDialerContextValue['onDeleteRef'] = useRef(null);
  const onClearRef: RcDialerContextValue['onClearRef'] = useRef(null);

  return (
    <RcDialerContext.Provider
      value={{
        dialPadActionRef,
        onInsertRef,
        onDeleteRef,
        inputRef,
        onClearRef,
      }}
    >
      <React.Fragment>{children}</React.Fragment>
    </RcDialerContext.Provider>
  );
};

RcDialer.defaultProps = {};

RcDialer.displayName = 'RcDialer';

export { RcDialer };
export type { RcDialerProps };
