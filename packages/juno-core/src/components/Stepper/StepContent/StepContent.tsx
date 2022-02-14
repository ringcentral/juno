import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiStepContent from '@material-ui/core/StepContent';

import { combineClasses, RcBaseProps, styled } from '../../../foundation';
import { StepContentStyle } from './styles';
import { RcStepContentClasses } from './utils';

type RcStepContentProps = {} & RcBaseProps<
  ComponentProps<typeof MuiStepContent>
>;

const _RcStepContent = forwardRef<any, RcStepContentProps>(
  (props: RcStepContentProps, ref) => {
    // const props = useThemeProps({ props: inProps, name: 'RcStepContent' });
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

export { RcStepContent };
export type { RcStepContentProps };
