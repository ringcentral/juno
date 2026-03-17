import React, {
  cloneElement,
  ComponentProps,
  FocusEvent,
  forwardRef,
  useMemo,
  useRef,
} from 'react';

import MuiStepButton from '@material-ui/core/StepButton';

import {
  combineClasses,
  combineProps,
  isRcElement,
  RcBaseProps,
  styled,
  useEventCallback,
  useForkRef,
  useSafeAutoFocus,
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
      autoFocus = false,
      disabled = false,
      focusRipple,
      onBlur,
      ...rest
    } = props;
    const innerRef = useRef<HTMLButtonElement>(null);
    const handleRef = useForkRef(innerRef, ref);
    const { suppressInitialFocusRipple, handleAutoFocusBlur } =
      useSafeAutoFocus(autoFocus && !disabled, innerRef);

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

    const handleBlur = useEventCallback(
      (event: FocusEvent<HTMLButtonElement>) => {
        handleAutoFocusBlur(event);
        onBlur?.(event);
      },
    );

    return (
      <MuiStepButton
        {...rest}
        disabled={disabled}
        focusRipple={suppressInitialFocusRipple ? false : focusRipple}
        icon={icon}
        onBlur={handleBlur}
        optional={optional}
        ref={handleRef}
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
