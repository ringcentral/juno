import MuiDialog from '@material-ui/core/Dialog';
import React, { ComponentProps, forwardRef, useMemo } from 'react';
import {
  combineClasses,
  RcBaseProps,
  RcBaseSize,
  styled,
  useRcPortalWindowContext,
  useThemeProps,
} from '../../foundation';
import { useUnmountPortalHandler } from '../PortalHost';
import { DialogStyle } from './styles';
import { RcDialogClasses } from './utils';

type RcDialogSize =
  | RcBaseSize<'xsmall' | 'small' | 'medium' | 'large'>
  | 'fullScreen';

type RcDialogProps = {
  /** size of dialog */
  size?: RcDialogSize;
} & RcBaseProps<ComponentProps<typeof MuiDialog>, 'maxWidth'>;

const _RcDialog = forwardRef<any, RcDialogProps>(
  (inProps: RcDialogProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcDialog' });
    const {
      classes: classesProp,
      size,
      children,
      onExited: onExitedProp,
      ...rest
    } = props;
    const classes = useMemo(
      () => combineClasses(RcDialogClasses, classesProp),
      [classesProp],
    );

    const { externalWindow } = useRcPortalWindowContext();

    const onExited = useUnmountPortalHandler(onExitedProp);

    const maxWidth = useMemo<
      ComponentProps<typeof MuiDialog>['maxWidth']
    >(() => {
      switch (size) {
        case 'fullScreen':
        case 'xsmall':
          return false;
        case 'large':
          return 'md';
        case 'medium':
          return 'sm';
        case 'small':
        default:
          return 'xs';
      }
    }, [size]);

    return (
      <MuiDialog
        ref={ref}
        container={externalWindow?.document.body}
        maxWidth={maxWidth}
        fullScreen={size === 'fullScreen' ? true : undefined}
        classes={classes}
        {...rest}
        onExited={onExited}
      >
        {children}
      </MuiDialog>
    );
  },
);

const RcDialog = styled(_RcDialog)`
  ${DialogStyle}
`;

RcDialog.defaultProps = {
  size: 'medium',
  fullWidth: true,
};

RcDialog.displayName = 'RcDialog';

export { RcDialog, RcDialogProps, RcDialogSize };
