import { StepButtonProps as MuiStepButtonProps } from '@material-ui/core/StepButton';
import MuiStepLabel from '@material-ui/core/StepLabel';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  combineProps,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { RcStepIcon, RcStepIconProps } from '../StepIcon';
import { StepLabelStyle } from './styles';
import { RcStepLabelClasses } from './utils';

type RcStepLabelProps = {
  /**
   * Props applied to the `RcStepIcon` element.
   */
  StepIconProps?: Partial<RcStepIconProps>;
} & RcBaseProps<ComponentProps<typeof MuiStepLabel>, 'StepIconProps'> &
  Pick<MuiStepButtonProps, 'active' | 'completed'> &
  Pick<RcStepIconProps, 'editable'>;

const _RcStepLabel = forwardRef<any, RcStepLabelProps>(
  (inProps: RcStepLabelProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcStepLabel' });
    const {
      classes: classesProp,
      StepIconProps: StepIconPropsProp,
      children,
      disabled,
      editable,
      onClick,
      ...rest
    } = props;

    const classes = useMemo(
      () => combineClasses(RcStepLabelClasses, classesProp),
      [classesProp],
    );

    const StepIconProps = useMemo(
      () => combineProps({ editable }, StepIconPropsProp),
      [StepIconPropsProp, editable],
    );

    return (
      <MuiStepLabel
        ref={ref}
        StepIconComponent={RcStepIcon}
        StepIconProps={StepIconProps}
        classes={classes}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        {...rest}
      >
        {children}
      </MuiStepLabel>
    );
  },
);

const RcStepLabel = styled(_RcStepLabel)`
  ${StepLabelStyle}
`;

RcStepLabel.defaultProps = {};

// ! that tell muiName our `RcStepLabel` is same as MuiStepLabel
(RcStepLabel as any).muiName = (MuiStepLabel as any).muiName;

RcStepLabel.displayName = 'RcStepLabel';

export { RcStepLabel, RcStepLabelProps };
