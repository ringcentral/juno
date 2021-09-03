import React, { FunctionComponent, useEffect, useMemo, useRef } from 'react';
import { PortalControllerProvider } from './PortalControllerProvider';
import { PortalDescriptor } from './PortalManager';

type RcPortalRendererProps = {
  portalDescriptor: PortalDescriptor;
};

const RcPortalRenderer: FunctionComponent<RcPortalRendererProps> = ({
  portalDescriptor,
}) => {
  // prevent portalDescriptor change
  const { current: portal } = useRef(portalDescriptor);

  const {
    Component,
    props: _props,
    onAfterOpened,
    onAfterClosed,
    portalController,
    onClose,
    open,
  } = portal;

  // lifecycle hooks cannot change
  useEffect(() => {
    onAfterOpened();

    return () => onAfterClosed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // component cannot change
  const element = useMemo(() => {
    const props = { ..._props, onClose, open } as any;
    return <Component {...props} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_props, onClose, open]);

  return (
    <PortalControllerProvider value={portalController}>
      {element}
    </PortalControllerProvider>
  );
};

RcPortalRenderer.displayName = 'RcPortalRenderer';

export { RcPortalRenderer, RcPortalRendererProps };
