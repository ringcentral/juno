import { createContext } from 'react';
import { PortalManager } from '../PortalManager';

export const PortalManagerContext = createContext<PortalManager | undefined>(
  undefined,
);

export const PortalManagerProvider = PortalManagerContext.Provider;
