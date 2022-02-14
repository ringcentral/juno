import React from 'react';

import { useEventCallback } from '../useEventCallback';

/**
 * group hidden logic, when binding events element focus,
 * that hiddenRef will auto be `tabindex={-1}` *
 */
export const useHiddenTabindex = <T extends HTMLElement>(
  hiddenRef: React.RefObject<T>,
) => {
  const handleFocus = useEventCallback(() => {
    const hiddenElm = hiddenRef.current;

    if (hiddenElm && hiddenElm.tabIndex === 0) {
      hiddenElm.tabIndex = -1;
    }
  });

  const handleBlur = useEventCallback(() => {
    const hiddenElm = hiddenRef.current;

    if (hiddenElm && hiddenElm.tabIndex === -1) {
      hiddenElm.tabIndex = 0;
    }
  });

  return {
    onFocus: handleFocus,
    onBlur: handleBlur,
  };
};
