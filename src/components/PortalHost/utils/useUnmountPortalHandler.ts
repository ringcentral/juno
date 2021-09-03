import { useEventCallback } from '../../../foundation';
import { UnmountSymbol } from '../PortalManager';
import { usePortalManagerWithID } from './usePortalManagerWithID';

export interface UseUnmountPortalHandler {
  <F extends (...args: any[]) => any>(handler?: F): F;
  (): () => void;
}

export const useUnmountPortalHandler: UseUnmountPortalHandler = (
  handler?: any,
) => {
  const managerWithID = usePortalManagerWithID();

  const handleExited = useEventCallback((node) => {
    handler?.(node);

    if (managerWithID) {
      const { manager, id } = managerWithID;
      manager[UnmountSymbol](id);
    }
  });

  return handleExited as any;
};
