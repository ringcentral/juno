import React, { forwardRef, KeyboardEvent, MouseEvent } from 'react';

import {
  RcBaseDirection,
  RcTheme,
  styled,
  useA11yKeyEvent,
  useEventCallback,
  useThemeProps,
} from '../../../foundation';
import { IconButtonGroupStyle } from './styles';

type RcIconButtonGroupProps = {
  /** radius token for `border-radius` */
  radius?: keyof RcTheme['radius'];
  /** Define the padding size of that group wrapper. */
  space?: number | number[];
  /** Define the size of the gap between below each components. */
  gap?: number;
  /** The arrangement of components, default is `horizontal`  */
  direction?: RcBaseDirection;
  /** is Stop Propagation for the bar click */
  isStopPropagation?: boolean;
  /** component for render root container, default is `div` */
  component?: React.ElementType;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const _RcIconButtonGroup = forwardRef<any, RcIconButtonGroupProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcIconButtonGroup' });
    const {
      children,
      isStopPropagation,
      onClick,
      onKeyUp,
      gap,
      space,
      radius,
      component: Component = 'div',
      ...rest
    } = props;
    const clickHandler = useEventCallback(
      (event: MouseEvent<HTMLDivElement>) => {
        onClick?.(event);
        isStopPropagation && event.stopPropagation();
      },
    );

    const handleOnKeyUp = useA11yKeyEvent(clickHandler, {
      preventDefault: false,
    });

    /** that button bar just for put buttons inside, and can stop below all events from this bar layer. */
    const keyUpHandler = useEventCallback(
      (event: KeyboardEvent<HTMLDivElement>) => {
        onKeyUp?.(event);
        isStopPropagation && event.stopPropagation();
        handleOnKeyUp(event);
      },
    );

    return (
      <Component
        onClick={clickHandler}
        onKeyUp={keyUpHandler}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

/**
 * provide IconButton group with wrapper
 */
const RcIconButtonGroup = styled(_RcIconButtonGroup)`
  ${IconButtonGroupStyle}
`;

RcIconButtonGroup.defaultProps = {
  gap: 0,
  direction: 'horizontal',
};

RcIconButtonGroup.displayName = 'RcIconButtonGroup';

export { RcIconButtonGroup, RcIconButtonGroupProps };
