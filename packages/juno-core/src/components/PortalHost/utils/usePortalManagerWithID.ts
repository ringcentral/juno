import { useContext } from 'react';
import { PortalIDContext, PortalManagerContext } from '../context';
import { HasPortalParentContext } from '../context/HasPortalParentContext';
import { PortalManager } from '../PortalManager';

export const usePortalManagerWithID = <
  M extends PortalManager = PortalManager,
>() => {
  const manager = useContext(PortalManagerContext) as M | undefined;
  const id = useContext(PortalIDContext);
  const hasPortalParent = useContext(HasPortalParentContext);

  if (hasPortalParent || !manager || id === undefined) return undefined;

  return { manager, id };
};
