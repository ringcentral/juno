import { useRef } from 'react';

import { usePrevious } from '../usePrevious';

/**
 * get value when prev listen value change
 * @param cb that method you want calculate to get value
 * @param listenCb prev compare listener value
 */
export const useChange = <T, K>(
  cb: (prevValue: K | undefined, nextValue: K) => T,
  listenCb: () => K,
): T => {
  const countRef = useRef(0);
  const valueRef = useRef<any>();

  const prev = usePrevious(listenCb);
  const curr = listenCb();

  if (countRef.current === 0 || prev !== curr) {
    countRef.current = 1;
    valueRef.current = cb(prev, curr);
  }

  return valueRef.current;
};

/**
 * get value when prev deps one of array value change
 * @param cb that method you want calculate to get value
 * @param deps prev compare value array
 */
export const useDepsChange = <T, K extends Array<any>>(
  cb: (prevValue: K | undefined, nextValue: K) => T,
  deps: K,
): T => {
  const countRef = useRef(0);
  const valueRef = useRef<any>();

  const prev = usePrevious(() => deps, true);
  const curr = deps;

  if (
    countRef.current === 0 ||
    curr.some((dep: any, index: number) => dep !== prev[index])
  ) {
    countRef.current = 1;
    valueRef.current = cb(prev, curr);
  }

  return valueRef.current;
};
