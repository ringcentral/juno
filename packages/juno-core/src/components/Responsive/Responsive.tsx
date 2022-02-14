import React, { FC, RefObject, useRef, useState } from 'react';

import {
  RcResponsiveContext,
  RcResponsiveContextValue,
  useRcPortalWindowContext,
  useResizeObserver,
  useTheme,
  useThemeProps,
} from '../../foundation';
import { BreakpointMap, getMatchedBreakpoint } from './utils';

type RcResponsiveProps = {
  /**
   * throttle time of resize
   * @default 200
   */
  resizeThrottle?: number;
  /**
   * define the max width of each breakpoint, default is same as theme token breakpoints
   */
  breakpointMap?: BreakpointMap;
  /**
   * ref with element that will be listened resize
   * default target is body of current window
   */
  responsiveTarget?: RefObject<HTMLElement>;
};

const RcResponsive: FC<RcResponsiveProps> = (inProps) => {
  const props = useThemeProps({ props: inProps, name: 'RcResponsive' });
  const theme = useTheme();

  const {
    children,
    responsiveTarget,
    resizeThrottle,
    breakpointMap = theme.breakpoints.values,
  } = props;

  const { externalWindow } = useRcPortalWindowContext();
  const currentWindow = externalWindow ?? window;

  const bodyRef = useRef(currentWindow.document.body);
  const targetRef = responsiveTarget ?? bodyRef;

  const [contextValue, setContextValue] = useState<RcResponsiveContextValue>(
    () => {
      const target = targetRef.current;
      if (target) {
        const width = target.clientWidth;
        return getMatchedBreakpoint(width, breakpointMap);
      }
      return;
    },
  );

  useResizeObserver(
    targetRef,
    () => {
      if (!targetRef.current) return;
      const width = targetRef.current.clientWidth;
      const matchedBreakpoint = getMatchedBreakpoint(width, breakpointMap!);

      setContextValue(matchedBreakpoint);
    },
    { mode: 'throttle', time: resizeThrottle },
  );

  return (
    <RcResponsiveContext.Provider value={contextValue}>
      {children}
    </RcResponsiveContext.Provider>
  );
};

RcResponsive.defaultProps = {
  resizeThrottle: 200,
};

RcResponsive.displayName = 'RcResponsive';

export { RcResponsive };
export type { RcResponsiveProps };
