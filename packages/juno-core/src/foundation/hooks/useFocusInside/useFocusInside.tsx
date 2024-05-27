import styled from '../../styled-components';
import React, { useMemo } from 'react';
import { logInDev } from '../../utils';

const FOCUSABLE_QUERY = '[data-focusable="true"]';

/**
 * non size for just render hidden element
 */
export const RcFocusInside = styled.span`
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 0;
  height: 0;
`;

export type useFocusInsideParams = {
  /**
   * the container that should move focus inside witch `[data-focusable="true"]`
   *
   * @default host element's parent
   */
  containerRef?: React.RefObject<HTMLElement>;
  /**
   * the custom selector for focusable element
   *
   * @default '[data-focusable="true"]'
   */
  selector?: string;
};

/**
 * focus always inside the container which `[data-focusable="true"]`
 */
export const useFocusInside = (options: useFocusInsideParams = {}) => {
  const { containerRef, selector = FOCUSABLE_QUERY } = options;

  return useMemo(() => {
    const start = (
      <RcFocusInside
        tabIndex={0}
        {...(process.env.NODE_ENV !== 'production'
          ? { 'data-test-automation-id': 'focus-inside-start' }
          : undefined)}
        onFocus={(e) => {
          const container = containerRef?.current || e.target.parentElement;
          const nodes = container?.querySelectorAll<HTMLElement>(selector);

          if (nodes) {
            const last = nodes[nodes.length - 1];
            last.focus();
          } else if (process.env.NODE_ENV !== 'production') {
            logInDev({
              component: 'useFocusInside',
              message:
                'Not found any [data-focusable="true"] element in container, please check your containerRef',
              level: 'warn',
            });
          }
        }}
      />
    );

    const end = (
      <RcFocusInside
        tabIndex={0}
        {...(process.env.NODE_ENV !== 'production'
          ? { 'data-test-automation-id': 'focus-inside-end' }
          : undefined)}
        onFocus={(e) => {
          const container = containerRef?.current || e.target.parentElement;
          const node = container?.querySelector<HTMLElement>(selector);

          if (node) {
            node?.focus();
          } else if (process.env.NODE_ENV !== 'production') {
            logInDev({
              component: 'useFocusInside',
              message:
                'Not found any [data-focusable="true"] element in container, please check your containerRef',
              level: 'warn',
            });
          }
        }}
      />
    );

    return {
      start,
      end,
    };
  }, [containerRef, selector]);
};
