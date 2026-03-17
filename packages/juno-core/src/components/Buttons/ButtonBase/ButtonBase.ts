import React, { ComponentProps, FocusEvent, forwardRef, useRef } from 'react';

import MuiButtonBase from '@material-ui/core/ButtonBase';

import {
  styled,
  useEventCallback,
  useForkRef,
  useSafeAutoFocus,
} from '../../../foundation';

type RcButtonBaseProps = ComponentProps<typeof MuiButtonBase>;

/** @release */
const _RcButtonBase = forwardRef<any, RcButtonBaseProps>((props, ref) => {
  const {
    autoFocus = false,
    disabled = false,
    focusRipple,
    onBlur,
    ...rest
  } = props;
  const innerRef = useRef<any>(null);
  const buttonRef = useForkRef(ref, innerRef);
  const { suppressInitialFocusRipple, handleAutoFocusBlur } = useSafeAutoFocus(
    autoFocus && !disabled,
    innerRef,
  );

  const handleBlur = useEventCallback((event: FocusEvent<any>) => {
    handleAutoFocusBlur(event);
    onBlur?.(event);
  });

  return React.createElement(MuiButtonBase, {
    ...rest,
    ref: buttonRef,
    disabled,
    focusRipple: suppressInitialFocusRipple ? false : focusRipple,
    onBlur: handleBlur,
  });
});

const RcButtonBase = styled(_RcButtonBase)``;

RcButtonBase.displayName = 'RcButtonBase';

export { RcButtonBase };
export type { RcButtonBaseProps };
