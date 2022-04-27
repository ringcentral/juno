import React, { createContext, FunctionComponent } from 'react';

export const HasPortalParentContext = createContext(false);

export const HasPortalParentProvider: FunctionComponent = ({ children }) => (
  <HasPortalParentContext.Provider value>
    {children}
  </HasPortalParentContext.Provider>
);
