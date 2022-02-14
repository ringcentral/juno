import { useCallback, useEffect, useRef } from 'react';

import { useId } from '../useId';

export const visuallyHiddenStyles = `
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

/**
 * read announce when need read message.
 *
 * @example
 * ```ts
 *   const announce = useAnnouncer('simpleId');
 *
 *   announce(`You click "Announce" button`);
 * ```
 */
export const useAnnouncer = (id?: string) => {
  const _id = useId(id ? `rc-announcer-${id}` : 'rc-announcer', !id);

  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.createElement('div');

    ref.current = el;
    el.id = _id;

    el.setAttribute('aria-live', 'assertive');
    el.setAttribute('aria-atomic', 'true');
    el.setAttribute('aria-hidden', 'false');

    el.setAttribute('style', visuallyHiddenStyles);

    document.body.appendChild(el);

    return () => {
      setTimeout(() => {
        const body = document.body;
        if (body.contains(el)) {
          body.removeChild(el);
        }

        if (el === ref.current) {
          ref.current = null;
        }
      });
    };
  }, [_id]);

  /** announce method, call with message that want let reader speak */
  const announce = useCallback((message?: string) => {
    const el = ref.current;
    if (el && message) {
      el.setAttribute('aria-hidden', 'false');
      el.textContent = message;
    }
  }, []);

  return announce;
};
