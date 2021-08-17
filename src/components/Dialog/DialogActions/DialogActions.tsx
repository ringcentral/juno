import MuiDialogActions from '@material-ui/core/DialogActions';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseDirection,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { RcDialogProps } from '../Dialog';
import { DialogActionsStyle } from './styles';
import { RcDialogActionsClasses } from './utils';

type RcDialogActionsProps = {
  /** direction of actions */
  direction?: RcBaseDirection;
} & Pick<RcDialogProps, 'size'> &
  RcBaseProps<ComponentProps<typeof MuiDialogActions>>;

const _RcDialogActions = forwardRef<any, RcDialogActionsProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcDialogActions' });
    const { classes: classesProp, size, children, ...rest } = props;

    const classes = useMemo(
      () => combineClasses(RcDialogActionsClasses, classesProp),
      [classesProp],
    );

    return (
      <MuiDialogActions {...rest} ref={ref} classes={classes} disableSpacing>
        {children}
      </MuiDialogActions>
    );
  },
);

const RcDialogActions = styled(_RcDialogActions)`
  ${DialogActionsStyle}
`;

RcDialogActions.defaultProps = {
  size: 'medium',
};

RcDialogActions.displayName = 'RcDialogActions';

export { RcDialogActions, RcDialogActionsProps };
