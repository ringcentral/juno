import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiDialogActions from '@material-ui/core/DialogActions';

import {
  combineClasses,
  RcBaseDirection,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { RcDialogChildrenProps, useDialogDefaultProps } from '../utils';
import { DialogActionsStyle } from './styles';
import { RcDialogActionsClasses } from './utils';

type RcDialogActionsProps = {
  /**
   * direction of actions
   *
   * @default 'horizontal'
   */
  direction?: RcBaseDirection;
  /**
   * reverse below items
   *
   * @default false, when direction is `vertical`, default reverse will be `true`
   */
  reverse?: boolean;
} & RcDialogChildrenProps &
  RcBaseProps<ComponentProps<typeof MuiDialogActions>>;

const _RcDialogActions = forwardRef<any, RcDialogActionsProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcDialogActions' });
    const { classes: classesProp, size, children, reverse, ...rest } = props;

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

const RcDialogActions = styled(_RcDialogActions).attrs(
  (props: RcDialogActionsProps) => {
    const toProps = useDialogDefaultProps(props);

    const direction =
      toProps.direction ??
      (toProps.size === 'small' ? 'vertical' : 'horizontal');

    const reverse = toProps.reverse ?? direction === 'vertical';

    return {
      ...toProps,
      direction,
      reverse,
    };
  },
)`
  ${DialogActionsStyle}
`;

RcDialogActions.defaultProps = {};

RcDialogActions.displayName = 'RcDialogActions';

export { RcDialogActions };
export type { RcDialogActionsProps };
