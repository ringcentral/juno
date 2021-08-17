import MuiStepContent from '@material-ui/core/StepContent';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { StepContentStyle } from './styles';
import { RcStepContentClasses } from './utils';

type RcStepContentProps = {} & RcBaseProps<
  ComponentProps<typeof MuiStepContent>
>;

const _RcStepContent = forwardRef<any, RcStepContentProps>(
  (inProps: RcStepContentProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcStepContent' });
    const { classes: classesProp, children, ...rest } = props;
    const classes = useMemo(
      () => combineClasses(RcStepContentClasses, classesProp),
      [classesProp],
    );

    return (
      <MuiStepContent {...rest} ref={ref} classes={classes}>
        {children}
      </MuiStepContent>
    );
  },
);

const RcStepContent = styled(_RcStepContent)`
  ${StepContentStyle}
`;

RcStepContent.defaultProps = {};

RcStepContent.displayName = 'RcStepContent';

export { RcStepContent, RcStepContentProps };
