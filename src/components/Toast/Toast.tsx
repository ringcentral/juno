import { SnackbarCloseReason } from '@material-ui/core';
import React, { ComponentProps, forwardRef, SyntheticEvent } from 'react';
import { RcBaseProps, styled } from '../../foundation';
import { Close as CloseIcon } from '../../icon';
import { RcPortal, RcPortalProps } from '../Portal';
import { RcSnackbar, RcSnackbarAction } from '../Snackbar';
import { ToastStyle } from './styles';
import { RC_TOAST_CONTAINER_ID } from './utils';

type ToastCloseReason =
  | Exclude<SnackbarCloseReason, 'clickaway'>
  | 'dismissButton';

type RcToastProps = {
  /**
   * @default 'RC_TOAST_CONTAINER_ID'
   * like `container` of RcPortal, but you can pass a element id either.
   */
  container?: RcPortalProps['container'] | 'string';
  /**
   * if you pass id to `container` prop
   * you can use this prop to specify a window
   */
  getWindow?: () => Window;
  /** If `true`, `toast` is open */
  open: boolean;
  /** trigger when toast close */
  onClose: (event: React.SyntheticEvent<any>, reason: ToastCloseReason) => void;
  /**
   * @default false
   */
  dismissButton?: boolean;
} & RcBaseProps<
  ComponentProps<typeof RcSnackbar>,
  'open' | 'onClose' | 'anchorOrigin'
>;

const _RcToast = forwardRef<any, RcToastProps>(
  (
    {
      children,
      container: containerProp = RC_TOAST_CONTAINER_ID,
      getWindow,
      onClose,
      ContentProps: ContentPropsInput = {},
      dismissButton = false,
      autoHideDuration = 3000,
      ...rest
    },
    ref,
  ) => {
    const container = (() => {
      // mean containerProp is id
      if (typeof containerProp === 'string') {
        const targetWindow = getWindow?.() ?? window;
        return targetWindow.document.getElementById(containerProp);
      }
      return containerProp;
    })();

    const action = (() => {
      const originActions = React.Children.toArray(ContentPropsInput.action);

      if (dismissButton) {
        const closeAction = (
          <RcSnackbarAction
            key="dismiss-action"
            variant="icon"
            aria-label="Dismiss"
            symbol={CloseIcon}
            onClick={(e) => handleClose(e, 'dismissButton')}
          />
        );
        return [...originActions, closeAction];
      }
      return originActions.length === 0 ? null : originActions;
    })();

    const messageAlign = (() => {
      if (action?.length) {
        return 'left';
      }
      return 'center';
    })();

    const ContentProps: RcToastProps['ContentProps'] = {
      ...ContentPropsInput,
      action,
      messageAlign,
    };

    const handleClose = (
      e: SyntheticEvent<any, Event>,
      reason: ToastCloseReason | SnackbarCloseReason,
    ) => {
      if (reason === 'clickaway') return;
      onClose(e, reason);
    };

    return (
      <RcPortal container={container}>
        <RcSnackbar
          {...rest}
          autoHideDuration={autoHideDuration}
          onClose={handleClose}
          ref={ref}
          ContentProps={ContentProps}
        >
          {children}
        </RcSnackbar>
      </RcPortal>
    );
  },
);

const RcToast = styled(_RcToast)`
  ${ToastStyle}
`;

RcToast.displayName = 'RcToast';

export { RcToast, RcToastProps, ToastCloseReason };
