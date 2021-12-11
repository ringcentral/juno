import React, { forwardRef, ReactNode } from 'react';

import {
  RcBaseProps,
  styled,
  useEventCallback,
  useThemeProps,
} from '../../foundation';
import { RcButton, RcButtonProps } from '../Buttons/Button';
import {
  RcDialog,
  RcDialogActions,
  RcDialogActionsProps,
  RcDialogContent,
  RcDialogContentProps,
  RcDialogContentText,
  RcDialogProps,
  RcDialogTitle,
  RcDialogTitleProps,
} from '../Dialog';
import { RcLoading } from '../Loading';

type RcPopupBoxProps = {
  /** title render */
  title?: ReactNode;
  /** footer render */
  footer?: ReactNode;
  /**
   * when loading, all action button will be disabled
   * and confirm button will be loading,
   *
   * - when loading is `true`, `disableEscapeKeyDown`, `disableBackdropClick` will be `true`
   * - you still can set those value with target props,
   * @example
   * disableEscapeKeyDown={false}
   * disableBackdropClick={false}
   */
  loading?: boolean;
  /**
   * show loadingOverlay to cover whole modal
   *
   * - when loadingOverlay is `true`, `disableEscapeKeyDown`, `disableBackdropClick` will be `true`
   * - you still can set those value with target props,
   * @example
   * disableEscapeKeyDown={false}
   * disableBackdropClick={false}
   */
  loadingOverlay?: boolean;
  /** content on confirm button */
  confirmButtonText?: ReactNode;
  /** props apply for cancel button */
  confirmButtonProps?: RcButtonProps;
  /** trigger when confirm */
  onConfirm?(event?: React.MouseEvent): any;
  /** content on cancel button */
  cancelButtonText?: ReactNode;
  /** props apply for cancel button */
  cancelButtonProps?: RcButtonProps;
  /** trigger when cancel */
  onCancel?: (
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown' | 'cancelClick',
  ) => void;
  TitleProps?: RcDialogTitleProps;
  ContentProps?: RcDialogContentProps;
  ActionsProps?: RcDialogActionsProps;
} & RcBaseProps<RcDialogProps, 'title' | 'size'>;

type RcDialogFuncProps = { componentProps?: any } & Omit<RcDialogProps, 'open'>;

const _RcPopupBox = forwardRef<any, RcPopupBoxProps>(
  (inProps: RcPopupBoxProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcPopupBox' });
    const {
      childrenSize,
      title,
      footer,
      loadingOverlay,
      loading,
      // ok btn
      confirmButtonText,
      confirmButtonProps,
      onConfirm,
      // cancel btn
      cancelButtonText,
      cancelButtonProps,
      onCancel,
      TitleProps,
      ContentProps,
      disableBackdropClick: disableBackdropClickProp,
      ActionsProps,
      children,
      onClose,
      open,
      ...rest
    } = props;

    const isXsmall = childrenSize === 'small';
    const isLoading = loading || loadingOverlay;
    const disableBackdropClick = disableBackdropClickProp ?? isLoading;

    const handleClose = useEventCallback((e, reason) => {
      if (reason === 'backdropClick' && disableBackdropClick) {
        return;
      }
      onClose?.(e, reason);
      onCancel?.(e, reason);
    });

    return (
      <RcDialog
        ref={ref}
        childrenSize={childrenSize}
        disableEscapeKeyDown={isLoading}
        onClose={handleClose}
        open={open}
        {...rest}
      >
        <RcLoading loading={loadingOverlay!}>
          <RcDialogTitle
            data-test-automation-id={'DialogTitle'}
            {...TitleProps}
          >
            {title}
          </RcDialogTitle>
          <RcDialogContent
            data-test-automation-id={'DialogContent'}
            {...ContentProps}
          >
            {typeof children === 'string' ? (
              <RcDialogContentText>{children}</RcDialogContentText>
            ) : (
              children
            )}
          </RcDialogContent>
          {footer !== null && (
            <RcDialogActions
              data-test-automation-id={'DialogActions'}
              {...ActionsProps}
            >
              {footer || (
                <>
                  {cancelButtonText && (
                    <RcButton
                      fullWidth={isXsmall}
                      variant="text"
                      onClick={(e) => onCancel?.(e, 'cancelClick')}
                      data-test-automation-id="DialogCancelButton"
                      disabled={loading}
                      {...cancelButtonProps}
                    >
                      {cancelButtonText}
                    </RcButton>
                  )}
                  {confirmButtonText && (
                    <RcButton
                      fullWidth={isXsmall}
                      onClick={onConfirm}
                      variant="contained"
                      data-test-automation-id="DialogOKButton"
                      disabled={loading}
                      loading={loading}
                      {...confirmButtonProps}
                    >
                      {confirmButtonText}
                    </RcButton>
                  )}
                </>
              )}
            </RcDialogActions>
          )}
        </RcLoading>
      </RcDialog>
    );
  },
);

/**
 * display a simple message or display a message and take user's confirmation on it or display a popup to take a user's input value
 */
const RcPopupBox = styled(_RcPopupBox)``;

RcPopupBox.defaultProps = {};

export { RcPopupBox };
export type { RcDialogFuncProps, RcPopupBoxProps };
