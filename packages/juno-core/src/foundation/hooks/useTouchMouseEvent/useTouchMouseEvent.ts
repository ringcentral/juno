import { MouseEventHandler, TouchEventHandler, useRef } from 'react';

import { useRcPortalWindowContext } from '../../contexts';
import { getRefElement, RefOrElementOrCallback } from '../../utils';
import { useEventCallback } from '../useEventCallback';

export interface UseTouchMouseEvent<T>
  extends Partial<UseTouchMouseOutputEvent<T>> {
  onTouchEnd?: (
    event: React.TouchEvent<T>,
    /**
     * when set insideRef, that will also emit the state of host reference contain pointer element when action stop
     */
    isInside?: boolean,
  ) => void;
  onMouseUp?: (
    event: React.MouseEvent<T, globalThis.MouseEvent>,
    /**
     * when set insideRef, that will also emit the state of host reference contain pointer element when action stop
     */
    isInside?: boolean,
  ) => void;
}

export interface UseTouchMouseOutputEvent<T> {
  onMouseUp: MouseEventHandler<T>;
  onMouseDown: MouseEventHandler<T>;
  onTouchEnd: TouchEventHandler<T>;
  onTouchStart: TouchEventHandler<T>;
}

export interface UseTouchMouseEventOptions<T extends HTMLElement> {
  /**
   * when set that elementRef, event will bring with leave state when `touchend` and `mouseup`
   *
   * stop action event in browser default can be trigger when `touchend`, `mouseup` outside target element,
   * set that host ref to make sure `touchend`, `mouseup` event only trigger when release inside target element
   */
  actionRef?: RefOrElementOrCallback<T>;
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
 * ### Once that is touch support device, that mouse event will never can be trigger
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
export const useTouchMouseEvent = <T extends HTMLElement = HTMLElement>(
  {
    onMouseDown: onMouseDownArg,
    onMouseUp: onMouseUpArg,
    onTouchStart: onTouchStartArg,
    onTouchEnd: onTouchEndArg,
  }: UseTouchMouseEvent<T>,
  { actionRef }: UseTouchMouseEventOptions<T> = {},
): UseTouchMouseOutputEvent<T> => {
  const stopMouseEventRef = useRef(false);

  const { document } = useRcPortalWindowContext();

  const onTouchStart = useEventCallback((e) => {
    stopMouseEventRef.current = true;
    onTouchStartArg?.(e);
  });

  function checkInside(elm: HTMLElement) {
    const hostElement = getRefElement(actionRef!);

    if (hostElement) {
      return !!(elm && isElmEqualOrContain(elm, hostElement));
    }

    return false;
  }

  const onTouchEnd = useEventCallback((e: React.TouchEvent<T>) => {
    let isInside: boolean | undefined;

    if (actionRef && e.touches.length < 2 && e.changedTouches.length < 2) {
      const touch = e.touches[0] || e.changedTouches[0];

      const elm = document.elementFromPoint(
        touch.pageX,
        touch.pageY,
      ) as HTMLElement | null;

      isInside = !!elm && checkInside(elm);
    }

    onTouchEndArg?.(e, isInside);
  });

  const onMouseDown = useEventCallback((e) => {
    if (stopMouseEventRef.current) {
      return;
    }
    onMouseDownArg?.(e);
  });

  const onMouseUp = useEventCallback((e) => {
    let isInside: boolean | undefined;

    if (stopMouseEventRef.current) return;

    if (actionRef) {
      const elm = e.target as HTMLElement | null;

      isInside = !!elm && checkInside(elm);
    }

    onMouseUpArg?.(e, isInside);
  });

  return {
    onTouchStart,
    onTouchEnd,
    onMouseDown,
    onMouseUp,
  };
};

/**
 * check is element equal or contains target element
 */
export const isElmEqualOrContain = (
  sourceTarget: RefOrElementOrCallback,
  containTarget: RefOrElementOrCallback,
) => {
  const elm = getRefElement(sourceTarget);
  const target = getRefElement(containTarget);

  return elm && target && (target === elm || target.contains(elm));
};
