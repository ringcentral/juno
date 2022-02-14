import { KeyboardEvent, useRef } from 'react';

import {
  getSelectionPosition,
  setSelectionPosition,
  useEventCallback,
} from '../../../../foundation';

/**
 * bind with ref, let input can always focus at end of latest character
 */
export const useFixedEndSelection = () => {
  const ref = useRef<HTMLInputElement>(null);

  const keypadModeFixedAtLatest = useEventCallback(() => {
    const { position, isSelectRange } = getSelectionPosition(ref);

    const value = ref.current?.value || '';

    if (isSelectRange || position.start < value.length) {
      const targetPosition = value.length;

      setSelectionPosition(ref, {
        start: targetPosition,
        end: targetPosition,
        scrollIntoView: true,
      });
    }
  });

  const onKeyDown = (e: KeyboardEvent) => {
    if (
      [
        'ArrowUp',
        'ArrowLeft',
        'ArrowRight',
        'ArrowDown',
        'PageUp',
        'PageDown',
        'Home',
        'End',
      ].includes(e.key)
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
    keypadModeFixedAtLatest();
  };

  return {
    ref,
    onFocus: keypadModeFixedAtLatest,
    onClick: keypadModeFixedAtLatest,
    onKeyDown,
  };
};
