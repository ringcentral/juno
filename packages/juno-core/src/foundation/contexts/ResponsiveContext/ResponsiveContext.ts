import { createContext, useContext } from 'react';

import { MatchedBreakpoint } from './types';

type RcResponsiveContextValue = MatchedBreakpoint | undefined;

const RcResponsiveContext = createContext<RcResponsiveContextValue>(undefined);

const useResponsiveContext = () => {
  return useContext(RcResponsiveContext);
};

export { RcResponsiveContext, useResponsiveContext };
export type { RcResponsiveContextValue };
