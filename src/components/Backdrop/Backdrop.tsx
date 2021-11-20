import MuiBackdrop from '@material-ui/core/Backdrop';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../foundation';
import { BackdropStyle } from './styles';
import { RcBackdropClasses } from './utils';

type RcBackdropProps = {} & RcBaseProps<ComponentProps<typeof MuiBackdrop>>;

const _RcBackdrop = forwardRef<any, RcBackdropProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcBackdrop' });
  const { classes: classesProp, children, ...rest } = props;
  const classes = useMemo(
    () => combineClasses(RcBackdropClasses, classesProp),
    [classesProp],
  );

  return (
    <MuiBackdrop {...rest} ref={ref} classes={classes}>
      {children}
    </MuiBackdrop>
  );
});

const RcBackdrop = styled(_RcBackdrop)`
  ${BackdropStyle}
`;

RcBackdrop.defaultProps = {};

RcBackdrop.displayName = 'RcBackdrop';

export { RcBackdrop };
export type { RcBackdropProps };
