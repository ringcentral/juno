import React, {
  cloneElement,
  ComponentProps,
  forwardRef,
  useMemo,
} from 'react';

import MuiStepButton from '@material-ui/core/StepButton';

import {
  combineClasses,
  combineProps,
  isRcElement,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { RcStepLabel, RcStepLabelProps } from '../StepLabel';
import { StepButtonStyle } from './styles';
import { RcStepButtonClasses } from './utils';

type RcStepButtonProps = {
  /** props apply for `StepLabel` */
  StepLabelProps?: RcStepLabelProps;
} & RcBaseProps<ComponentProps<typeof MuiStepButton>> &
  Pick<RcStepLabelProps, 'error' | 'editable'>;

const _RcStepButton = forwardRef<any, RcStepButtonProps>(
  (inProps: RcStepButtonProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcStepButton' });
    const {
      classes: classesProp,
      children: childrenProp,
      icon,
      optional,
      error,
      StepLabelProps,
      editable,
      ...rest
    } = props;

    const classes = useMemo(
      () => combineClasses(RcStepButtonClasses, classesProp),
      [classesProp],
    );

    const children = useMemo(() => {
      const childProps: RcStepLabelProps | undefined = combineProps(
        {
          icon,
          optional,
          error,
          StepIconProps: { editable },
        },
        StepLabelProps,
      );

      return isRcElement(childrenProp, ['RcStepLabel']) ? (
        cloneElement(childrenProp as any, childProps)
      ) : (
        <RcStepLabel {...childProps}>{childrenProp}</RcStepLabel>
      );
    }, [StepLabelProps, childrenProp, editable, error, icon, optional]);

    return (
      <MuiStepButton
        {...rest}
        icon={icon}
        optional={optional}
        ref={ref}
        classes={classes}
      >
        {children}
      </MuiStepButton>
    );
  },
);

const RcStepButton = styled(_RcStepButton)`
  ${StepButtonStyle}
`;

RcStepButton.defaultProps = {
  alternativeLabel: true,
};

RcStepButton.displayName = 'RcStepButton';

export { RcStepButton };
export type { RcStepButtonProps };
