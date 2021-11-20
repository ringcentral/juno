import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import {
  RcBaseProps,
  RcPaletteProp,
  useForkRef,
  useTheme,
  useThemeProps,
} from '../../../foundation';
import {
  getTransitionProps,
  reflow,
  setTransitionStyle,
  Transition,
  TransitionProps,
  TransitionStatus,
} from '../../Transitions';
import { useNormalizedTransitionProps } from '../../Transitions/utils';
import { getHighlightStyle } from './utils';

type RcHighlightProps = {
  /** host animation element */
  children: React.ReactElement<any>;
  /** the time of that animation time, default as `3000`ms */
  duration?: number;
  /** the time of that highligh hold time, default as `1000`ms */
  holdTime?: number;
  /** that animation easing */
  easing?: string;
  /** that trigger highlight action ref */
  action: React.MutableRefObject<() => void>;
  /** background color when highlight */
  backgroundColor?: RcPaletteProp;
} & RcBaseProps<TransitionProps, 'in' | 'timeout'>;

/**
 * provide transition for highlight element,
 * default behaviors: highlight for `1s` then transition to non background with `2s`
 */
const RcHighlight = forwardRef<any, RcHighlightProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcHighlight' });

  const {
    children,
    style,
    onExit,
    onEnter,
    onExited,
    backgroundColor: backgroundColorProp,
    duration = 3000,
    holdTime = 1000,
    easing = 'cubic-bezier(.575, .105, .835, .295)',
    action,
    ...other
  } = props;
  const theme = useTheme();

  const [inValue, setInValue] = useState(false);

  const styles = getHighlightStyle({ backgroundColorProp, theme });

  const nodeRef = useRef<HTMLElement>(null);

  const handlers = useNormalizedTransitionProps(
    {
      ...props,
      onEnter: (node, isAppearing) => {
        reflow(node); // So the animation always start from the start.

        setTransitionStyle(node, '');

        onEnter?.(node, isAppearing);
      },
      onExit: (node) => {
        const transitionProps = getTransitionProps(
          {
            style: { transitionDelay: `${holdTime}ms` },
            timeout: { exit: duration - holdTime },
            easing,
          },
          {
            mode: 'exit',
          },
        );

        const transitionStyle = theme.transitions.create(
          ['background-color'],
          transitionProps,
        );

        setTransitionStyle(node, transitionStyle);

        onExit?.(node);
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

  useImperativeHandle(
    action,
    () => () => {
      setInValue(true);
      setTimeout(() => setInValue(false), 0);
    },
    [],
  );

  return (
    <Transition
      appear
      nodeRef={nodeRef as any}
      in={inValue}
      {...handlers}
      {...other}
      timeout={{ exit: duration }}
    >
      {(state: TransitionStatus, childProps: any) => {
        return React.cloneElement(children, {
          style: {
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

RcHighlight.defaultProps = {};

RcHighlight.displayName = 'RcHighlight';

export { RcHighlight };
export type { RcHighlightProps };
