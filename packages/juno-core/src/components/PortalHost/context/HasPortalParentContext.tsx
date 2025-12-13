import React, { createContext, FunctionComponent, ReactNode } from 'react';

export const HasPortalParentContext = createContext(false);

type HasPortalParentProviderProps = {
  children?: ReactNode;
};

export const HasPortalParentProvider: FunctionComponent<HasPortalParentProviderProps> =
  ({ children }) => (
    <HasPortalParentContext.Provider value>
      {children}
    </HasPortalParentContext.Provider>
  );
