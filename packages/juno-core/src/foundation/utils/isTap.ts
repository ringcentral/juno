import { TouchEvent } from 'react';

/**
 * @param event TouchEndEvent
 */
export const isTap = (event: TouchEvent) => {
  if (event.touches.length < 2 && event.changedTouches.length < 2) {
    const touch = event.touches[0] || event.changedTouches[0];

    const elm = document.elementFromPoint(
      touch.clientX,
      touch.clientY,
    ) as HTMLElement | null;

    return event.currentTarget === elm || event.currentTarget.contains(elm);
  }

  return false;
};
