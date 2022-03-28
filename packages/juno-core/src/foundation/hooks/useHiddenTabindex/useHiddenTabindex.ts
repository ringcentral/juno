import { getRefElement, RefOrElementOrCallback } from '../../utils';
import { useEventCallback } from '../useEventCallback';

/**
 * group hidden logic, when binding events element focus,
 * that hiddenRef will auto be `tabindex={-1}` *
 */
export const useHiddenTabindex = <T extends HTMLElement>(
  target: RefOrElementOrCallback<T>,
) => {
  const handleFocus = useEventCallback(() => {
    const hiddenElm = getRefElement(target);

    if (hiddenElm && hiddenElm.tabIndex === 0) {
      hiddenElm.tabIndex = -1;
    }
  });

  const handleBlur = useEventCallback(() => {
    const hiddenElm = getRefElement(target);

    if (hiddenElm && hiddenElm.tabIndex === -1) {
      hiddenElm.tabIndex = 0;
    }
  });

  return {
    onFocus: handleFocus,
    onBlur: handleBlur,
  };
};
