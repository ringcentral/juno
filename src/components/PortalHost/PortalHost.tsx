import React, { FunctionComponent, useEffect, useRef, useState } from 'react';

import { ConnectSymbol } from './Connectable';
import { PortalManagerProvider } from './context';
import { PortalDescriptor, PortalManager } from './PortalManager';
import { RcPortalRenderer } from './PortalRenderer';

type RcPortalHostProps = {
  manager: PortalManager;
};

const RcPortalHost: FunctionComponent<RcPortalHostProps> = ({ manager }) => {
  const [portals, setPortals] = useState<PortalDescriptor[]>([]);

  // prevent manager change
  const managerRef = useRef(manager);

  useEffect(() => {
    const disconnectHandler = managerRef.current[ConnectSymbol](
      (portalDescriptors) => {
        setPortals(portalDescriptors);
      },
    );

    return disconnectHandler;
  }, []);

  return (
    <PortalManagerProvider value={managerRef.current}>
      {portals.map((portal) => (
        <RcPortalRenderer key={portal.id} portalDescriptor={portal} />
      ))}
    </PortalManagerProvider>
  );
};

RcPortalHost.displayName = 'RcPortalHost';

export { RcPortalHost };
export type { RcPortalHostProps };
