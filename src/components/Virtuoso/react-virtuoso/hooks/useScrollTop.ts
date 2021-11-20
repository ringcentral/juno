import * as u from '@virtuoso.dev/urx';
import { useCallback, useEffect, useRef } from 'react';

export type ScrollerRef = Window | HTMLElement | null;

export default function useScrollTop(
  scrollTopCallback: (scrollTop: number) => void,
  smoothScrollTargetReached: (yes: true) => void,
  scrollerElement: any,
  scrollerRefCallback: (ref: ScrollerRef) => void = u.noop,
  customWindow: Window = window,
) {
  const scrollerRef = useRef<HTMLElement | null | Window>(null);
  const scrollTopTarget = useRef<any>(null);
  const timeoutRef = useRef<any>(null);
  const customDocument = customWindow.document;

  const handler = useCallback(
    (ev: Event) => {
      const el = ev.target as HTMLElement;
      const scrollTop =
        (el as any) === customWindow || (el as any) === customDocument
          ? customWindow.pageYOffset || customDocument.documentElement.scrollTop
          : el.scrollTop;
      scrollTopCallback(Math.max(scrollTop, 0));

      if (scrollTopTarget.current !== null) {
        if (
          scrollTop === scrollTopTarget.current ||
          scrollTop <= 0 ||
          scrollTop === el.scrollHeight - el.offsetHeight
        ) {
          scrollTopTarget.current = null;
          smoothScrollTargetReached(true);
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
        }
      }
    },
    [
      customDocument,
      customWindow,
      scrollTopCallback,
      smoothScrollTargetReached,
    ],
  );

  useEffect(() => {
    const localRef = scrollerRef.current!;

    scrollerRefCallback(scrollerRef.current);
    handler({ target: localRef } as unknown as Event);
    localRef.addEventListener('scroll', handler, { passive: true });

    return () => {
      scrollerRefCallback(null);
      localRef.removeEventListener('scroll', handler);
    };
  }, [scrollerRef, handler, scrollerElement, scrollerRefCallback]);

  function scrollToCallback(location: ScrollToOptions) {
    const scrollerElement = scrollerRef.current;
    if (!scrollerElement) {
      return;
    }

    const isSmooth = location.behavior === 'smooth';

    let offsetHeight: number;
    let scrollHeight: number;
    let scrollTop: number;

    if (scrollerElement === customWindow) {
      // this is not a mistake
      scrollHeight = Math.max(
        customDocument.documentElement.offsetHeight,
        customDocument.documentElement.scrollHeight,
      );
      offsetHeight = customWindow.innerHeight;
      scrollTop = customDocument.documentElement.scrollTop;
    } else {
      scrollHeight = (scrollerElement as HTMLElement).scrollHeight;
      offsetHeight = (scrollerElement as HTMLElement).offsetHeight;
      scrollTop = (scrollerElement as HTMLElement).scrollTop;
    }

    // avoid system hanging because the DOM never called back
    // with the scrollTop
    // scroller is already at this location
    if (offsetHeight === scrollHeight || location.top === scrollTop) {
      scrollTopCallback(scrollTop);
      if (isSmooth) {
        smoothScrollTargetReached(true);
      }
      return;
    }

    const maxScrollTop = scrollHeight - offsetHeight;
    location.top = Math.max(Math.min(maxScrollTop, location.top!), 0);

    if (isSmooth) {
      scrollTopTarget.current = location.top;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        scrollTopTarget.current = null;
        smoothScrollTargetReached(true);
      }, 1000);
    } else {
      scrollTopTarget.current = null;
    }

    scrollerElement.scrollTo(location);
  }

  function scrollByCallback(location: ScrollToOptions) {
    if (scrollTopTarget.current === null) {
      scrollerRef.current!.scrollBy(location);
    }
  }

  return { scrollerRef, scrollByCallback, scrollToCallback };
}
