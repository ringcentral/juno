import React, {
  ComponentProps,
  FocusEvent,
  forwardRef,
  useMemo,
  useRef,
} from 'react';

import MuiTab from '@material-ui/core/Tab';

import {
  combineProps,
  RcBaseProps,
  RcBaseSize,
  styled,
  useEventCallback,
  useForkRef,
  useSafeAutoFocus,
  useThemeProps,
} from '../../../foundation';
import { TabStyle } from './styles';
import { RcTabClasses } from './utils';

type RcTabSize = RcBaseSize<'small' | 'large'>;

type RcTabProps = {
  /** tab size, default is `small` */
  size?: RcTabSize;
  /** tab wrapper flex direction, default is `vertical` */
  direction?: 'vertical' | 'horizontal';
} & RcBaseProps<ComponentProps<typeof MuiTab>, 'wrapped' | 'textColor'>;

const _RcTab = forwardRef<any, RcTabProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcTab' });
  const {
    classes: classesProp,
    children,
    direction,
    autoFocus = false,
    disableFocusRipple: disableFocusRippleProp = false,
    disabled = false,
    onBlur,
    ...rest
  } = props;
  const innerRef = useRef<any>(null);
  const tabRef = useForkRef(ref, innerRef);
  const { suppressInitialFocusRipple, handleAutoFocusBlur } =
    useSafeAutoFocus(autoFocus && !disabled, innerRef);
  const classes = useMemo(
    () => combineProps(RcTabClasses, classesProp),
    [classesProp],
  );
  const handleBlur = useEventCallback((event: FocusEvent<any>) => {
    handleAutoFocusBlur(event);
    onBlur?.(event);
  });

  return (
    <MuiTab
      {...rest}
      ref={tabRef}
      classes={classes}
      disabled={disabled}
      disableFocusRipple={
        suppressInitialFocusRipple ? true : disableFocusRippleProp
      }
      onBlur={handleBlur}
    />
  );
});

const RcTab = styled(_RcTab)`
  ${TabStyle}
`;

RcTab.defaultProps = {
  size: 'small',
};

RcTab.displayName = 'RcTab';

export { RcTab };
export type { RcTabProps };
