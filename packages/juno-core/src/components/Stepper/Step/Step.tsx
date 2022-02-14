import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiStep from '@material-ui/core/Step';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { StepStyle } from './styles';
import { RcStepClasses } from './utils';

type RcStepProps = {} & RcBaseProps<ComponentProps<typeof MuiStep>>;

const _RcStep = forwardRef<any, RcStepProps>((inProps: RcStepProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcStep' });
  const { classes: classesProp, children, ...rest } = props;
  const classes = useMemo(
    () => combineClasses(RcStepClasses, classesProp),
    [classesProp],
  );

  return (
    <MuiStep {...rest} ref={ref} classes={classes}>
      {children}
    </MuiStep>
  );
});

const RcStep = styled(_RcStep)`
  ${StepStyle}
`;

RcStep.defaultProps = {};

RcStep.displayName = 'RcStep';

export { RcStep };
export type { RcStepProps };
