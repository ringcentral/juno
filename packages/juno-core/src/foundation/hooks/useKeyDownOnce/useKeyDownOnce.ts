import { useRef } from 'react';

import { useEventCallback } from '../useEventCallback';

export type UseKeyDownOnce<T> = {
  onKeyUp?: (e: React.KeyboardEvent<T>) => void;
  onKeyDown?: (e: React.KeyboardEvent<T>) => void;
};

/**
 * Provide user trigger `onKeyDown` only one time when hold press on key.
 * @param includeKeys that check include keys
 * @param methods trigger when first keydown or keyup
 * @returns
 */
export const useKeyDownOnce = <T>(
  includeKeys: string[],
  { onKeyDown, onKeyUp }: UseKeyDownOnce<T>,
) => {
  const isKeyDownMapRef = useRef<Record<string, boolean>>({});

  const handleKeyDown = useEventCallback((e: React.KeyboardEvent<T>) => {
    if (includeKeys.includes(e.key)) {
      if (!isKeyDownMapRef.current[e.key]) {
        onKeyDown?.(e);
      } else {
        e.preventDefault();
        e.stopPropagation();
      }

      isKeyDownMapRef.current[e.key] = true;
    } else {
      onKeyDown?.(e);
    }
  });

  const handleKeyUp = useEventCallback((e: React.KeyboardEvent<T>) => {
    if (includeKeys.includes(e.key)) {
      isKeyDownMapRef.current[e.key] = false;
    }

    onKeyUp?.(e);
  });

  return {
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
  };
};
