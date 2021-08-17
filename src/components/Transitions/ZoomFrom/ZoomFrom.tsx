import React, { forwardRef, useRef } from 'react';

import {
  RcBaseProps,
  useForkRef,
  useTheme,
  useThemeProps,
} from '../../../foundation';
import { useNormalizedTransitionProps } from '../utils';
import {
  duration,
  getTransitionProps,
  reflow,
  setTransitionStyle,
  Transition,
  TransitionProps,
  TransitionStatus,
} from '../Transition';
import { transformToFromElm } from './utils';

const styles = {
  entering: {
    transform: '',
  },
  entered: {},
  exiting: {
    transform: '',
  },
  exited: {},
};

type RcZoomFromProps = {
  /**  host element */
  children: React.ReactElement<any>;
  /** that transform anchor element */
  from: React.RefObject<HTMLElement>;
} & RcBaseProps<TransitionProps>;

const RcZoomFrom = forwardRef<any, RcZoomFromProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcZoomFrom' });
  const {
    from: fromRef,
    children,
    in: inProp,
    style,
    timeout,
    onExit,
    onEnter,
    onExited,
    onExiting,
    onEntering,
    ...other
  } = props;
  const theme = useTheme();

  const nodeRef = useRef<HTMLElement>(null);

  const handlers = useNormalizedTransitionProps(
    {
      ...props,
      onEnter: (node, isAppearing) => {
        transformToFromElm(fromRef, nodeRef);
        reflow(node); // So the animation always start from the start.

        onEnter?.(node, isAppearing);
      },
      onEntering: (node, isAppearing) => {
        const transitionProps = getTransitionProps(props, {
          mode: 'enter',
        });

        const transitionStyle = theme.transitions.create(
          ['all'],
          transitionProps,
        );

        setTransitionStyle(node, transitionStyle);
        onEntering?.(node, isAppearing);
      },
      onExit: (node) => {
        const transitionProps = getTransitionProps(props, {
          mode: 'exit',
        });

        const transitionStyle = theme.transitions.create(
          ['all'],
          transitionProps,
        );

        setTransitionStyle(node, transitionStyle);

        onExit?.(node);
      },
      onExiting: (node) => {
        transformToFromElm(fromRef, nodeRef);
        reflow(node); // So the animation always start from the start.
        onExiting?.(node);
      },
      onExited: (node) => {
        setTransitionStyle(node, '');
        onExited?.(node);
      },
    },
    nodeRef,
  );

  const foreignRef = useForkRef((children as any).ref, ref);
  const handleRef = useForkRef(nodeRef, foreignRef);

  return (
    <Transition
      appear
      timeout={timeout!}
      nodeRef={nodeRef as any}
      in={inProp}
      {...handlers}
      {...other}
    >
      {(state: TransitionStatus, childProps: any) => {
        return React.cloneElement(children, {
          style: {
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
});

RcZoomFrom.defaultProps = {
  timeout: {
    enter: duration.enteringScreen,
    exit: duration.enteringScreen,
  },
};

RcZoomFrom.displayName = 'ZoomInFadeOut';

export { RcZoomFrom, RcZoomFromProps };
