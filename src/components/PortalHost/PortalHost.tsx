import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { ConnectSymbol } from './Connectable';
import { PortalDescriptor, PortalManager } from './PortalManager';
import { RcPortalRenderer } from './PortalRenderer';

type RcPortalHostProps = {
  manager: PortalManager;
};

const RcPortalHost: FunctionComponent<RcPortalHostProps> = ({
  manager: portalManager,
}) => {
  const [portals, setPortals] = useState<PortalDescriptor[]>([]);

  // manager cannot change
  useEffect(() => {
    return portalManager[ConnectSymbol]((portalDescriptors) => {
      setPortals(portalDescriptors);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const portalRenderers = useMemo(() => {
    return portals.map((portal) => {
      return <RcPortalRenderer key={portal.id} portalDescriptor={portal} />;
    });
  }, [portals]);

  return <>{portalRenderers}</>;
};

RcPortalHost.displayName = 'RcPortalHost';

export { RcPortalHost, RcPortalHostProps };
