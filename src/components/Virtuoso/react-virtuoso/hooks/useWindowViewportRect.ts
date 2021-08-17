import { useCallback, useEffect, useRef } from 'react';

import { WindowViewportInfo } from '../interfaces';
import { useSizeWithElRef } from './useSize';

export default function useWindowViewportRectRef(
  callback: (info: WindowViewportInfo) => void,
  customWindow: Window = window,
) {
  const viewportInfo = useRef<WindowViewportInfo | null>(null);

  const calculateInfo = useCallback(
    (element: HTMLElement | null) => {
      if (element === null) {
        return;
      }
      const rect = element.getBoundingClientRect();
      const visibleHeight = customWindow.innerHeight - Math.max(0, rect.top);

      const visibleWidth = rect.width;
      const offsetTop = rect.top + customWindow.pageYOffset;
      viewportInfo.current = {
        offsetTop,
        visibleHeight,
        visibleWidth,
      };
      callback(viewportInfo.current);
    },
    [callback, customWindow],
  );

  const { callbackRef, ref } = useSizeWithElRef(calculateInfo);

  const windowEH = useCallback(() => {
    calculateInfo(ref.current);
  }, [calculateInfo, ref]);

  useEffect(() => {
    customWindow.addEventListener('scroll', windowEH);
    customWindow.addEventListener('resize', windowEH);
    return () => {
      customWindow.removeEventListener('scroll', windowEH);
      customWindow.removeEventListener('resize', windowEH);
    };
  }, [customWindow, windowEH]);

  return callbackRef;
}
