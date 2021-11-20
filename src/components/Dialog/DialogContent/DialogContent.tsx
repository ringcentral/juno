import MuiDialogContent from '@material-ui/core/DialogContent';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { RcDialogChildrenProps, useDialogDefaultProps } from '../utils';
import { DialogContentStyle } from './styles';
import { RcDialogContentClasses } from './utils';

type RcDialogContentProps = {} & RcDialogChildrenProps &
  RcBaseProps<ComponentProps<typeof MuiDialogContent>>;

const _RcDialogContent = forwardRef<any, RcDialogContentProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcDialogContent' });
    const { classes: classesProp, children, size, ...rest } = props;
    const classes = useMemo(
      () => combineClasses(RcDialogContentClasses, classesProp),
      [classesProp],
    );

    return (
      <MuiDialogContent {...rest} ref={ref} classes={classes}>
        {children}
      </MuiDialogContent>
    );
  },
);

const RcDialogContent = styled(_RcDialogContent).attrs(useDialogDefaultProps)`
  ${DialogContentStyle}
`;

RcDialogContent.defaultProps = {};

RcDialogContent.displayName = 'RcDialogContent';

export { RcDialogContent };
export type { RcDialogContentProps };
