import React, { useEffect, useRef } from 'react';

import { useA11yKeyEvent } from '../useA11yKeyEvent';
import { useDebounce } from '../useDebounce';
import { useEventCallback } from '../useEventCallback';
import {
  isElmEqualOrContain,
  useTouchMouseEvent,
  UseTouchMouseEvent,
} from '../useTouchMouseEvent';

export interface UseLongPressOptions {
  /** is prevent all non need event */
  isPreventDefault?: boolean;
  /** the longPress delay */
  delay?: number;
  /** for custom window */
  externalWindow?: Window;
}

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
  onContextMenu?: (e: React.MouseEvent<T, MouseEvent>) => void;
} & UseTouchMouseEvent<T>;

/**
 * Provide longPress helper, both `click`/`tab`/`keydown` will trigger event
 *
 * - Trigger `onTap` when user action leave small than delay time.
 * - Trigger `onPress` when action time is long than delay time.
 *
 * @default UseLongPressOptions { isPreventDefault = true, delay = 300 }
 */
export const useLongPress = <T = unknown>(
  { onTap, onPress }: UseLongPressOutput<T>,
  {
    onTouchStart,
    onTouchEnd,
    onMouseDown,
    onKeyDown,
    onKeyUp,
    onContextMenu,
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
  const elmRef = useRef<HTMLElement>(null);

  const reasonRef = useRef<UseLongPressEventReason>('click');

  const emitLongPress = useDebounce((e) => {
    // * only when have onPress set have emit
    if (onPress) {
      onPress(e, reasonRef.current);
      isEmittedRef.current = true;
    }
  }, delay);

  const end = (e: React.MouseEvent<T, MouseEvent> | React.TouchEvent<T>) => {
    // ! mouse up only trigger when up on element, so we host that in document
    externalWindow.document.removeEventListener('mouseup', onMouseUp);

    if (!isEmittedRef.current && isElmEqualOrContain(e.target as any, elmRef)) {
      onTap?.(e, reasonRef.current);
    }

    reasonRef.current = 'click';
    isEmittedRef.current = false;
    emitLongPress.cancel();
  };

  const start = (e: React.MouseEvent<T, MouseEvent> | React.TouchEvent<T>) => {
    // ! mouse up only trigger when up on element, so we host that in document
    externalWindow.document.addEventListener('mouseup', onMouseUp);

    const isTouch = e.type === 'touchstart';

    if (!isTouch) e.preventDefault();

    e.stopPropagation();

    if (isTouch) {
      reasonRef.current = 'tap';
    }

    emitLongPress(e);
  };

  const { onMouseUp, ...events } = useTouchMouseEvent<T>(
    {
      onTouchStart: (e) => {
        onTouchStart?.(e);
        start(e);
      },
      onTouchEnd: (e) => {
        onTouchEnd?.(e);
        end(e);
      },
      onMouseDown: (e) => {
        onMouseDown?.(e);
        start(e);
      },
      onMouseUp: (e) => {
        onMouseUpArg?.(e);
        end(e);
      },
    },
    { isPreventDefault },
  );

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

    if (isA11yDownRef.current) end(e);
    isA11yDownRef.current = false;
  });

  const handleContextMenu = useEventCallback((e) => {
    onContextMenu?.(e);
    e.preventDefault();
  });

  useEffect(() => {
    return () => {
      // * clean when in start remove
      externalWindow.document.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseUp, externalWindow]);

  return {
    ref: elmRef,
    onContextMenu: handleContextMenu,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ...events,
  };
};
