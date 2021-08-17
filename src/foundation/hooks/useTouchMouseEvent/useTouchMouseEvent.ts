import { MouseEventHandler, TouchEventHandler, useRef } from 'react';

import { useEventCallback } from '../useEventCallback';

export interface UseTouchMouseEvent<T> {
  onMouseUp?: MouseEventHandler<T>;
  onMouseDown?: MouseEventHandler<T>;
  onTouchEnd?: TouchEventHandler<T>;
  onTouchStart?: TouchEventHandler<T>;
}
export interface UseTouchMouseEventOptions {
  isPreventDefault?: boolean;
}
/**
 * Provide a utils for switch trigger touch event or mouse event between different device
 *
 * - Trigger `touch` event in `touch support` device
 *   - onTouchStart
 *   - onTouchEnd
 * - Trigger `mouse` event in `non touch support` device
 *   - onMouseDown
 *   - onMouseUp
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent
 *
 * Event order:
 * - touchstart
 * - Zero or more touchmove events, depending on movement of the finger(s)
 * - touchend
 * - mousemove
 * - mousedown
 * - mouseup
 * - click
 */
export const useTouchMouseEvent = <T = unknown>(
  {
    onMouseDown: onMouseDownArg,
    onMouseUp: onMouseUpArg,
    onTouchStart: onTouchStartArg,
    onTouchEnd: onTouchEndArg,
  }: UseTouchMouseEvent<T>,
  { isPreventDefault = true }: UseTouchMouseEventOptions = {},
) => {
  const isLiveEndRef = useRef(false);
  const isStartRef = useRef(false);

  const startAction = () => (isStartRef.current = true);
  const endAction = () => (isStartRef.current = false);

  const onTouchStart = useEventCallback((e) => {
    startAction();

    onTouchStartArg?.(e);
  });

  const onTouchEnd = useEventCallback((e) => {
    endAction();

    isLiveEndRef.current = true;
    onTouchEndArg?.(e);
  });

  const preventDefaultEvent = (e: Event) => {
    if (isPreventDefault) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const onMouseDown: MouseEventHandler<T> = useEventCallback((e) => {
    startAction();

    if (isLiveEndRef.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onMouseDownArg?.(e);
  });

  const onMouseUp = useEventCallback((e) => {
    if (!isStartRef.current) {
      preventDefaultEvent(e);
      return;
    }

    endAction();

    if (isLiveEndRef.current) {
      isLiveEndRef.current = false;
      preventDefaultEvent(e);

      return;
    }
    onMouseUpArg?.(e);
  });

  return {
    onTouchStart,
    onTouchEnd,
    onMouseDown,
    onMouseUp,
  };
};

export const isElmEqualOrContainRef = (
  elm: Element | undefined,
  elmRef: React.RefObject<HTMLElement>,
) => {
  return (
    elm &&
    elmRef &&
    (elmRef.current === elm || elmRef.current?.contains(elm as any))
  );
};
