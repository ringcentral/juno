import { useRef } from 'react';

import { useEventCallback } from '../useEventCallback';
import { useForceUpdate } from '../useForceUpdate';

/**
 * Returns a stateful like state with Ref, and a function to update it current value.
 * can trigger update value without re-render
 *
 * @param value init value
 * @param customUpdate you can custom you update method, or just set your `forceUpdate` to reuse same instance
 * @returns an array with [ref, update]
 *
 * @example
 * ```ts
 * const [inputRef, updateInput] = useRefState(123);
 *
 * if(needReRender){
 *   updateInput(456); // trigger re-render
 * } else {
 *   updateInput(456, false); // not trigger re-render
 * }
 * ```
 */
export const useRefState = <T>(value: T, customUpdate?: () => void) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const forceUpdate = customUpdate ?? useForceUpdate();
  const innerValueRef = useRef(value);

  /**
   * update ref value, set isUpdate to `false` will not trigger re-render
   */
  const setInnerValue = useEventCallback(
    (
      toValue: T,
      /**
       * is re-render
       * @default true
       */
      isUpdate: boolean = true,
    ) => {
      innerValueRef.current = toValue;

      if (isUpdate) {
        forceUpdate();
      }
    },
  );

  return [innerValueRef, setInnerValue] as const;
};
