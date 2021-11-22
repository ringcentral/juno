import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiCardActions from '@material-ui/core/CardActions';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { CardActionsStyle } from './styles';
import { RcCardActionsClasses } from './utils';

type RcCardActionsProps = {} & RcBaseProps<
  ComponentProps<typeof MuiCardActions>
>;

const _RcCardActions = forwardRef<any, RcCardActionsProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcCardActions' });
  const { classes: classesProp, ...rest } = props;
  const classes = useMemo(
    () => combineClasses(RcCardActionsClasses, classesProp),
    [classesProp],
  );

  return <MuiCardActions {...rest} ref={ref} classes={classes} />;
});

const RcCardActions = styled(_RcCardActions)`
  ${CardActionsStyle}
`;

RcCardActions.defaultProps = {};

RcCardActions.displayName = 'RcCardActions';

export { RcCardActions };
export type { RcCardActionsProps };
