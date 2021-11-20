import {
  // getTransitionProps as MuiGetTransitionProps,
  reflow as MuiReflow,
  // @ts-ignore
} from '@material-ui/core/transitions/utils';

import {
  TransitionProps as MuiTransitionProps,
  TransitionHandlerKeys as MuiTransitionHandlerKeys,
  TransitionHandlerProps as MuiTransitionHandlerProps,
  TransitionKeys as MuiTransitionKeys,
} from '@material-ui/core/transitions';
import { Duration } from '@material-ui/core/styles/transitions';

export * from 'react-transition-group';
export * from '@material-ui/core/styles/transitions';

/**
 * that method inside mui, provide you can make the animation always start from the start.
 */
export const reflow: (node: HTMLElement) => void = MuiReflow;

export type TransitionTimeout = MuiTransitionProps['timeout'];

export type TransitionProps = MuiTransitionProps;
export type TransitionHandlerKeys = MuiTransitionHandlerKeys;
export type TransitionHandlerProps = MuiTransitionHandlerProps;
export type TransitionKeys = MuiTransitionKeys;

export type DurationTypes = keyof Duration;

// export const getTransitionProps: (
//   props: {
//     timeout?: TransitionTimeout;
//     easing?: string;
//     style?: React.CSSProperties;
//   },
//   options?: { mode: string },
// ) => Parameters<Transitions['create']>['1'] = MuiGetTransitionProps;

// TODO: wait for upgrade mui version that will support custom easing
/**
 * that method inside mui, get mui transition props, use with `theme.transitions.create`
 */
export function getTransitionProps(
  props: {
    timeout?: TransitionTimeout;
    easing?: string | Record<string, string>;
    style?: React.CSSProperties;
  },
  options: { mode: string },
): {
  duration?: number;
  easing?: string;
  delay?: string;
} {
  const { timeout, easing, style = {} } = props;

  return {
    duration:
      style.transitionDuration || typeof timeout === 'number'
        ? timeout
        : timeout?.[options.mode] || 0,
    easing:
      style.transitionTimingFunction || typeof easing === 'object'
        ? easing?.[options.mode]
        : easing,
    delay: style.transitionDelay,
  };
}

/**
 * set node transition style
 */
export const setTransitionStyle = (node: HTMLElement, value: string) => {
  node.style.webkitTransition = value;
  node.style.transition = value;
};
