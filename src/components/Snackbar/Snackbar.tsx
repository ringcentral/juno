import Slide from '@material-ui/core/Slide';
import MuiSnackbar from '@material-ui/core/Snackbar';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  combineProps,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../foundation';
import { useUnmountPortalHandler } from '../PortalHost';
import { RcSnackbarContent, RcSnackbarContentProps } from './SnackbarContent';
import { SnackbarStyle } from './styles';
import { RcSnackbarClasses } from './utils';

type RcSnackbarProps = {
  /** props apply for `RcSnackbarContent` */
  ContentProps?: RcSnackbarContentProps;
} & RcBaseProps<ComponentProps<typeof MuiSnackbar>> &
  Pick<RcSnackbarContentProps, 'size' | 'type'>;

const _RcSnackbar = forwardRef<any, RcSnackbarProps>(
  (inProps: RcSnackbarProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcSnackbar' });
    const {
      classes: classesProp,
      size,
      type,
      message,
      action,
      ContentProps,
      children,
      TransitionProps: TransitionPropsProp,
      ...rest
    } = props;

    const classes = useMemo(
      () => combineClasses(RcSnackbarClasses, classesProp),
      [classesProp],
    );

    const onExited = useUnmountPortalHandler(TransitionPropsProp?.onExited);

    const TransitionProps = useMemo(
      () => combineProps({ onExited }, TransitionPropsProp),
      [TransitionPropsProp, onExited],
    );

    return (
      <MuiSnackbar
        ref={ref}
        classes={classes}
        TransitionProps={TransitionProps}
        {...rest}
      >
        {children || (
          <RcSnackbarContent
            size={size}
            type={type}
            message={message}
            action={action}
            {...ContentProps}
          />
        )}
      </MuiSnackbar>
    );
  },
);

const RcSnackbar = styled(_RcSnackbar)`
  ${SnackbarStyle}
`;

RcSnackbar.defaultProps = {
  TransitionComponent: Slide,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
};

RcSnackbar.displayName = 'RcSnackbar';

export { RcSnackbar };
export type { RcSnackbarProps };
