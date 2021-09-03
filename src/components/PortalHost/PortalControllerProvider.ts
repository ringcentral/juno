import { createContext, useContext } from 'react';
import { PortalController } from './PortalManager';

const PortalControllerContext = createContext<
  PortalController<{}, any> | undefined
>(undefined);

export const PortalControllerProvider = PortalControllerContext.Provider;

export const usePortalController = () => {
  return useContext(PortalControllerContext);
};
