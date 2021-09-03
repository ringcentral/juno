import { useContext, useMemo } from 'react';
import { PortalIDContext, PortalManagerContext } from '../context';
import { PortalManager } from '../PortalManager';

export const usePortalManagerWithID = <
  M extends PortalManager = PortalManager
>() => {
  const manager = useContext(PortalManagerContext) as M | undefined;
  const id = useContext(PortalIDContext);

  return useMemo(() => {
    if (manager && id !== undefined) {
      return { manager, id };
    }
    return undefined;
  }, [id, manager]);
};
