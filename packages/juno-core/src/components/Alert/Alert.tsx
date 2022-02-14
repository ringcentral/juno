import React, { ComponentProps, forwardRef } from 'react';

import MuiAlert from '@material-ui/lab/Alert';

import {
  combineClasses,
  RcBaseProps,
  RcBaseSize,
  styled,
  useThemeProps,
} from '../../foundation';
import { AlertStyle, EmptyIcon } from './styles';
import { RcAlertClasses } from './utils';

type RcAlertSize = RcBaseSize<'small' | 'medium'>;

type RcAlertProps = {
  /** that text align of message */
  align?: 'center' | 'left' | 'right';
  /** size with spacing between message and root */
  size?: RcAlertSize;
} & RcBaseProps<
  ComponentProps<typeof MuiAlert>,
  'iconMapping' | 'variant' | 'color'
>;

const _RcAlert = forwardRef<any, RcAlertProps>((inProps: RcAlertProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcAlert' });
  const { icon, classes: classesProp, children, align, size, ...rest } = props;
  const classes = combineClasses(RcAlertClasses, classesProp);

  return (
    <MuiAlert
      // * no icon in current design
      icon={icon === true ? undefined : icon ?? EmptyIcon}
      {...rest}
      ref={ref}
      classes={classes}
    >
      {children}
    </MuiAlert>
  );
});

const RcAlert = styled(_RcAlert)`
  ${AlertStyle}
`;

RcAlert.defaultProps = {
  severity: 'info',
  size: 'medium',
  align: 'left',
  square: true,
};

RcAlert.displayName = 'RcAlert';

export { RcAlert };
export type { RcAlertProps, RcAlertSize };
