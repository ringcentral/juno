import MuiDialogContent from '@material-ui/core/DialogContent';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { RcDialogProps } from '../Dialog';
import { DialogContentStyle } from './styles';
import { RcDialogContentClasses } from './utils';

type RcDialogContentProps = {} & Pick<RcDialogProps, 'size'> &
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

const RcDialogContent = styled(_RcDialogContent)`
  ${DialogContentStyle}
`;

RcDialogContent.defaultProps = {
  size: 'medium',
};

RcDialogContent.displayName = 'RcDialogContent';

export { RcDialogContent, RcDialogContentProps };
