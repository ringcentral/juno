import {
  FocusEventHandler,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { useEventCallback } from '../useEventCallback';

const useEnhancedEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

type UseSafeAutoFocusResult<T extends HTMLElement> = {
  suppressInitialFocusRipple: boolean;
  handleAutoFocusBlur: FocusEventHandler<T>;
};

const useSafeAutoFocus = <T extends HTMLElement>(
  autoFocus: boolean,
  targetRef: RefObject<T>,
): UseSafeAutoFocusResult<T> => {
  const [suppressInitialFocusRipple, setSuppressInitialFocusRipple] =
    useState(autoFocus);
  const autoFocusAppliedRef = useRef(false);
  const suppressInitialFocusRippleRef = useRef(autoFocus);

  useEnhancedEffect(() => {
    if (!autoFocus) {
      autoFocusAppliedRef.current = false;
      suppressInitialFocusRippleRef.current = false;
      setSuppressInitialFocusRipple(false);
      return;
    }

    suppressInitialFocusRippleRef.current = true;
    setSuppressInitialFocusRipple(true);

    if (!autoFocusAppliedRef.current) {
      autoFocusAppliedRef.current = true;
      targetRef.current?.focus();
    }
  }, [autoFocus, targetRef]);

  const handleAutoFocusBlur = useEventCallback(() => {
    if (suppressInitialFocusRippleRef.current) {
      suppressInitialFocusRippleRef.current = false;
      setSuppressInitialFocusRipple(false);
    }
  });

  return {
    suppressInitialFocusRipple,
    handleAutoFocusBlur,
  };
};

export { useSafeAutoFocus };
