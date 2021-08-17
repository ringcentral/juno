import { RefObject } from 'react';

import { TransitionHandlerProps } from '../Transition';

export const useNormalizedTransition = <T extends Function | undefined>(
  callback: T,
  nodeRef: RefObject<HTMLElement>,
): NonNullable<T> => {
  return ((maybeIsAppearing: boolean) => {
    if (callback) {
      const node = nodeRef.current;

      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  }) as any;
};

export const useNormalizedTransitionProps = (
  {
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
  }: TransitionHandlerProps,
  nodeRef: RefObject<HTMLElement>,
): TransitionHandlerProps => {
  const handleEnter = useNormalizedTransition(onEnter, nodeRef);
  const handleEntering = useNormalizedTransition(onEntering, nodeRef);
  const handleEntered = useNormalizedTransition(onEntered, nodeRef);
  const handleExit = useNormalizedTransition(onExit, nodeRef);
  const handleExiting = useNormalizedTransition(onExiting, nodeRef);
  const handleExited = useNormalizedTransition(onExited, nodeRef);

  return {
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    onExited: handleExited,
  };
};
