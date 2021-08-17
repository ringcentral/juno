import { createContext, useContext } from 'react';

type RcPortalWindowContextValue = {
  externalWindow?: Window;
  document: Document;
};

const RcPortalWindowContext = createContext<RcPortalWindowContextValue>({
  document,
});

const useRcPortalWindowContext = () => useContext(RcPortalWindowContext);

export { RcPortalWindowContext, useRcPortalWindowContext };
