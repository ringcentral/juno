import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiStepper from '@material-ui/core/Stepper';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../foundation';
import { RcStepConnector } from './StepConnector';
import { StepperStyle } from './styles';
import { RcStepperClasses } from './utils';

type RcStepperProps = {} & RcBaseProps<
  ComponentProps<typeof MuiStepper>,
  'orientation'
>;

const _RcStepper = forwardRef<any, RcStepperProps>(
  (inProps: RcStepperProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcStepper' });
    const { classes: classesProp, children, ...rest } = props;

    const classes = useMemo(
      () => combineClasses(RcStepperClasses, classesProp),
      [classesProp],
    );

    return (
      <MuiStepper {...rest} ref={ref} classes={classes}>
        {children}
      </MuiStepper>
    );
  },
);

const RcStepper = styled(_RcStepper)`
  ${StepperStyle}
`;

RcStepper.defaultProps = {
  alternativeLabel: true,
  nonLinear: true,
  connector: <RcStepConnector />,
};

RcStepper.displayName = 'RcStepper';

export { RcStepper };
export type { RcStepperProps };
