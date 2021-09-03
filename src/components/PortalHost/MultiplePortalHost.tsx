import React, { ComponentType, FunctionComponent, useMemo } from 'react';
import { RcPortalHost, RcPortalHostProps } from './PortalHost';
import { PortalManager } from './PortalManager';

type PortalHostLikeComp = ComponentType<RcPortalHostProps>;

type RcMultiplePortalHostProps = {
  managers: (PortalManager | [PortalManager, PortalHostLikeComp])[];
};

/**
 * this component just combine PortalHost.
 * you can use PortalHost directly if you have only one portalManager.
 */
const RcMultiplePortalHost: FunctionComponent<RcMultiplePortalHostProps> = ({
  managers,
}) => {
  const portalSubHosts = useMemo(
    () =>
      managers
        .map<[PortalManager, PortalHostLikeComp]>((manager) => {
          if (Array.isArray(manager)) return manager;
          return [manager, RcPortalHost];
        })
        .map(([manager, Host]) => {
          return <Host key={manager.id} manager={manager} />;
        }),
    [managers],
  );

  return <>{portalSubHosts}</>;
};

RcMultiplePortalHost.displayName = 'RcMultiplePortalHost';

export { RcMultiplePortalHost, RcMultiplePortalHostProps, PortalHostLikeComp };
