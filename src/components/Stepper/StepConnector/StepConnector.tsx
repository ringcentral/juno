import MuiStepConnector from '@material-ui/core/StepConnector';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { StepConnectorStyle } from './styles';
import { RcStepConnectorClasses } from './utils';

type RcStepConnectorProps = {} & RcBaseProps<
  ComponentProps<typeof MuiStepConnector>
>;

const _RcStepConnector = forwardRef<any, RcStepConnectorProps>(
  (inProps: RcStepConnectorProps, ref) => {
    const prop = useThemeProps({ props: inProps, name: 'RcStepConnector' });
    const { classes: classesProp, ...rest } = prop;
    const classes = useMemo(
      () => combineClasses(RcStepConnectorClasses, classesProp),
      [classesProp],
    );

    return <MuiStepConnector {...rest} ref={ref} classes={classes} />;
  },
);

/** inner component */
const RcStepConnector = styled(_RcStepConnector)`
  ${StepConnectorStyle}
`;

RcStepConnector.defaultProps = {};

RcStepConnector.displayName = 'RcStepConnector';

export { RcStepConnector, RcStepConnectorProps };
