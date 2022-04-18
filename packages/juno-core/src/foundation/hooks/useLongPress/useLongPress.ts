import React, { useRef } from 'react';

import { useA11yKeyEvent } from '../useA11yKeyEvent';
import { useDebounce } from '../useDebounce';
import { useEventCallback } from '../useEventCallback';
import { useEventListener } from '../useEventListener';
import { useGlobalListener } from '../useGlobalListener';
import { useTouchMouseEvent, UseTouchMouseEvent } from '../useTouchMouseEvent';

export const isTouchEvent = <T = unknown>(
  ev: React.MouseEvent<T, MouseEvent> | React.TouchEvent<T>,
): ev is React.TouchEvent<T> => {
  return 'touches' in ev;
};

export interface UseLongPressOptions {
  /**
   * auto event.preventDefault for `mousedown`, `touchstart`, `touchend`
   * always use for not leave that element
   */
  isPreventDefault?: boolean;
  /** the longPress delay */
  delay?: number;
  /** for custom window */
  externalWindow?: Window;
}

// TODO: should change to below
// export type UseLongPressEventReason = 'keyboard' | 'mouse' | 'touch';
export type UseLongPressEventReason = 'keyboard' | 'click' | 'tap';

export type UseLongPressOutput<T> = {
  /** trigger when click or tab or keyboard */
  onTap?: (
    e:
      | React.MouseEvent<T, MouseEvent>
      | React.TouchEvent<T>
      | React.KeyboardEvent<T>,
    reason: UseLongPressEventReason,
  ) => void;
  /** trigger when press or long click */
  onPress?: (
    e:
      | React.MouseEvent<T, MouseEvent>
      | React.TouchEvent<T>
      | React.KeyboardEvent<T>,
    reason: UseLongPressEventReason,
  ) => void;
};

export type UseLongPressInput<T> = {
  onKeyUp?: (e: React.KeyboardEvent<T>) => void;
  onKeyDown?: (e: React.KeyboardEvent<T>) => void;
} & UseTouchMouseEvent<T>;

/**
 * Provide longPress helper, both `click`/`tab`/`keydown` will trigger event
 *
 * - Trigger `onTap` when user action leave small than delay time.
 * - Trigger `onPress` when action time is long than delay time.
 *
 * @default UseLongPressOptions { delay = 300 }
 */
export const useLongPress = <T extends HTMLElement = HTMLElement>(
  { onTap, onPress }: UseLongPressOutput<T>,
  {
    onTouchStart: onTouchStartArg,
    onTouchEnd: onTouchEndArg,
    onMouseDown,
    onKeyDown,
    onKeyUp,
    onMouseUp: onMouseUpArg,
  }: UseLongPressInput<T> = {},
  {
    isPreventDefault = true,
    delay = 300,
    externalWindow = window,
  }: UseLongPressOptions = {},
) => {
  const isEmittedRef = useRef(false);
  const isA11yDownRef = useRef(false);
  const actionRef = useRef<T | null>(null);

  const reasonRef = useRef<UseLongPressEventReason>('click');

  const emitLongPress = useDebounce((e) => {
    // * only when have onPress set have emit
    if (onPress) {
      onPress(e, reasonRef.current);
      isEmittedRef.current = true;
    }
  }, delay);

  const end = (
    e: React.MouseEvent<T, MouseEvent> | React.TouchEvent<T>,
    isInside?: boolean,
  ) => {
    // ! mouse up only trigger when up on element, so we host that in document
    globalMouseUpListener.remove();

    if (!isEmittedRef.current && isInside) {
      onTap?.(e, reasonRef.current);
    }

    reasonRef.current = 'click';
    isEmittedRef.current = false;
    emitLongPress.cancel();
  };

  const start = (e: React.MouseEvent<T, MouseEvent> | React.TouchEvent<T>) => {
    // ! mouse up only trigger when up on element, so we host that in document
    globalMouseUpListener.listen();

    const isTouch = e.type === 'touchstart';

    if (isTouch) {
      reasonRef.current = 'tap';
    }

    emitLongPress(e);
  };

  const { onMouseUp, onTouchEnd, onTouchStart, ...events } =
    useTouchMouseEvent<T>(
      {
        onTouchStart: (e) => {
          // prevent long touch leave element focus
          if (isPreventDefault) {
            e.preventDefault();
          }

          onTouchStartArg?.(e);
          start(e);
        },
        onTouchEnd: (e, isInside) => {
          // prevent leave element focus
          if (isPreventDefault) {
            e.preventDefault();
          }

          onTouchEndArg?.(e, isInside);
          end(e, isInside);
        },
        onMouseDown: (e) => {
          if (isPreventDefault) {
            e.preventDefault();
          }

          onMouseDown?.(e);
          start(e);
        },
        onMouseUp: (e, isInside) => {
          // prevent leave element focus
          if (isPreventDefault) {
            e.preventDefault();
          }

          onMouseUpArg?.(e);
          end(e, isInside);
        },
      },
      { actionRef },
    );

  // use event listener for make event `passive` work in safari
  useEventListener(actionRef, 'touchstart', onTouchStart, {
    passive: false,
  });
  // use event listener for make event `passive` work in safari
  useEventListener(actionRef, 'touchend', onTouchEnd, {
    passive: false,
  });

  const globalMouseUpListener = useGlobalListener('mouseup', onMouseUp, {
    target: externalWindow,
    startImmediately: false,
  });

  const handleDeleteKeyDown = useA11yKeyEvent((e: React.KeyboardEvent<T>) => {
    reasonRef.current = 'keyboard';

    // * keydown when hold will trigger many time, show when current is a11y down, not trigger again
    if (!isA11yDownRef.current) {
      emitLongPress(e);
    }

    isA11yDownRef.current = true;
  });

  const handleKeyDown = useEventCallback((e) => {
    onKeyDown?.(e);
    handleDeleteKeyDown(e);
  });

  const handleKeyUp = useEventCallback((e) => {
    onKeyUp?.(e);

    if (isA11yDownRef.current) end(e, true);
    isA11yDownRef.current = false;
  });

  return {
    ref: actionRef,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ...events,
  };
};
