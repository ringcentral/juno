import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { PortalIDProvider } from './context';
import { PortalDescriptor } from './PortalManager';

type RcPortalRendererProps = {
  portalDescriptor: PortalDescriptor;
};

/**
 * private, do not use this directly
 */
const RcPortalRenderer: FunctionComponent<RcPortalRendererProps> = ({
  portalDescriptor,
}) => {
  const {
    Component,
    props: _props,
    onMounted,
    onUnmounted,
    onClose,
    open,
    id,
  } = portalDescriptor;

  useEffect(() => {
    onMounted();

    return () => onUnmounted();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const element = useMemo(() => {
    // onClose, open must be covered
    const props = { ..._props, onClose, open } as any;

    return <Component {...props} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_props, open]);

  return <PortalIDProvider value={id}>{element}</PortalIDProvider>;
};

RcPortalRenderer.displayName = 'RcPortalRenderer';

export { RcPortalRenderer, RcPortalRendererProps };
