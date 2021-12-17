import React, { forwardRef } from 'react';
import { styled } from '../../foundation';
import { RcPortal, RcPortalProps } from '../Portal';
import { ToastContainerStyle } from './styles';
import { RC_TOAST_CONTAINER_ID } from './utils';

type RcToastContainerProps = {
  container?: RcPortalProps['container'];
  className?: string;
  /** container id, RcToast can render by this id */
  id?: string;
};

const _RcToastContainer = forwardRef<any, RcToastContainerProps>(
  (props, ref) => {
    const {
      container = document.body,
      id = RC_TOAST_CONTAINER_ID,
      ...rest
    } = props;
    return (
      <RcPortal container={container}>
        <div {...rest} id={id} ref={ref} />
      </RcPortal>
    );
  },
);

const RcToastContainer = styled(_RcToastContainer)`
  ${ToastContainerStyle}
`;

RcToastContainer.displayName = 'RcToastContainer';

export { RcToastContainer, RcToastContainerProps };
