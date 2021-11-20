import React, { forwardRef, useRef } from 'react';

import {
  RcBaseProps,
  useForkRef,
  useTheme,
  useThemeProps,
} from '../../../foundation';
import {
  duration,
  getTransitionProps,
  reflow,
  setTransitionStyle,
  Transition,
  TransitionProps,
  TransitionStatus,
} from '../Transition';
import { useNormalizedTransitionProps } from '../utils';

const styles = {
  entering: {
    opacity: 0,
    transform: 'scale(1.1)',
  },
  entered: {
    transform: 'scale(1)',
    opacity: 1,
  },
  exiting: {
    opacity: 0,
    transform: 'scale(1)',
  },
  exited: {
    opacity: 0,
  },
};

type RcZoomInFadeOutProps = {
  /**  host element */
  children: React.ReactElement<any>;
} & RcBaseProps<TransitionProps>;

const RcZoomInFadeOut = forwardRef<any, RcZoomInFadeOutProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcZoomInFadeOut' });
    const {
      children,
      in: inProp,
      style,
      onExit,
      onEnter,
      timeout,
      ...other
    } = props;
    const theme = useTheme();

    const nodeRef = useRef<HTMLElement>(null);

    const handlers = useNormalizedTransitionProps(
      {
        ...props,
        onEnter: (node: HTMLElement, isAppearing: boolean) => {
          reflow(node); // So the animation always start from the start.

          const transitionProps = getTransitionProps(props, {
            mode: 'enter',
          });

          const transitionStyle = theme.transitions.create(
            ['opacity', 'transform'],
            transitionProps,
          );

          setTransitionStyle(node, transitionStyle);

          onEnter?.(node, isAppearing);
        },
        onExit: (node: HTMLElement) => {
          const transitionProps = getTransitionProps(props, {
            mode: 'exit',
          });

          const transitionStyle = theme.transitions.create(
            ['opacity', 'transform'],
            transitionProps,
          );

          setTransitionStyle(node, transitionStyle);

          onExit?.(node);
        },
      },
      nodeRef,
    );

    const foreignRef = useForkRef((children as any).ref, ref);
    const handleRef = useForkRef(nodeRef, foreignRef);

    return (
      <Transition
        appear
        nodeRef={nodeRef as any}
        in={inProp}
        timeout={timeout!}
        {...handlers}
        {...other}
      >
        {(state: TransitionStatus, childProps: any) => {
          return React.cloneElement(children, {
            style: {
              transform: 'scale(0)',
              opacity: state === 'entering' ? 0 : 1,
              visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
              ...style,
              ...children.props.style,
              ...styles[state],
            },
            ref: handleRef,
            ...childProps,
          });
        }}
      </Transition>
    );
  },
);

RcZoomInFadeOut.defaultProps = {
  timeout: {
    enter: duration.enteringScreen,
    exit: duration.enteringScreen,
  },
};

RcZoomInFadeOut.displayName = 'ZoomInFadeOut';

export { RcZoomInFadeOut };
export type { RcZoomInFadeOutProps };
