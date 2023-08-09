import React, { useRef } from 'react';

import { IndexLocationWithAlign, ListItem } from 'react-virtuoso';

type UseHighlightScrollParams = {
  /** function to call to scroll to target index */
  scrollToIndex: (location: IndexLocationWithAlign) => void;
  /** that scroll container height ref */
  containerHeighRef: React.MutableRefObject<number>;
};

/**
 * scroll into current highlight index
 */
export function useHighlightScroll({
  containerHeighRef,
  scrollToIndex,
}: UseHighlightScrollParams) {
  const renderedItemsRef = useRef<ListItem<any>[]>([]);
  const scrollerRef = useRef<HTMLElement>();

  const scrollToHighlightedIndex = (
    prevHighlightedIndex: number,
    currHighlightedIndex: number,
    topHighlightIndex = 0,
  ) => {
    if (!scrollerRef.current) {
      if (currHighlightedIndex !== topHighlightIndex) {
        requestAnimationFrame(() => {
          scrollToIndex({
            index: currHighlightedIndex,
            align: 'start',
          });
        });
      }

      return;
    }

    const scrollElm = scrollerRef.current;
    const renderedItems = renderedItemsRef.current;

    const isBackward = prevHighlightedIndex > currHighlightedIndex;
    const isForward = prevHighlightedIndex < currHighlightedIndex;

    const currentVisibleOffset = {
      start: scrollElm.scrollTop,
      stop: scrollElm.scrollTop + containerHeighRef.current,
    };

    // * when highlightedIndex is out of visible range
    if (!renderedItems.some((x) => x.index === currHighlightedIndex)) {
      scrollToIndex({
        index: currHighlightedIndex,
        align: isBackward ? 'start' : 'end',
      });

      return;
    }

    // backward
    if (isBackward) {
      let firstShouldScrollIndex = currHighlightedIndex;

      for (let i = renderedItems.length - 1; i >= 0; i--) {
        const item = renderedItems[i];

        if (item.offset <= currentVisibleOffset.start) {
          break;
        }
        firstShouldScrollIndex = item.index;
      }

      if (currHighlightedIndex < firstShouldScrollIndex) {
        scrollToIndex({
          index: currHighlightedIndex,
          align: 'start',
        });
      }
      // forward
    } else if (isForward) {
      let lastShouldScrollIndex = currHighlightedIndex;

      for (let i = 0; i < renderedItems.length; i++) {
        const item = renderedItems[i];

        if (item.offset >= currentVisibleOffset.stop) {
          break;
        }
        lastShouldScrollIndex = item.index;
      }

      if (currHighlightedIndex >= lastShouldScrollIndex) {
        scrollToIndex({
          index: currHighlightedIndex,
          align: 'end',
        });
      }
    } else {
      scrollToIndex({
        index: currHighlightedIndex,
        align: 'start',
      });
    }
  };

  return {
    /**
     * scroller reference
     */
    scrollerRef,
    /**
     * Scroll to target highlighted index
     * @param prevHighlightedIndex previous highlightedIndex
     * @param currHighlightedIndex current highlightedIndex
     * @param topHighlightIndex top highlighIndex for check should scroll when init
     */
    scrollToHighlightedIndex,
    /**
     * set to virtuoso `scrollerRef` prop, auto bind inner `scrollerRef`
     */
    scrollerRefFn: (elm: HTMLElement) => (scrollerRef.current = elm),
    /**
     * set to virtuoso `itemsRendered` prop, auto bind inner `renderedItemsRef`
     */
    itemsRendered: (e: ListItem<any>[]) => (renderedItemsRef.current = e),
  };
}

/**
 * modify virtuoso style to fix safari scroll bug
 */
export function modifyVlScrollerStyle(
  scrollElm: HTMLElement,
  position: 'absolute' | 'unset' = 'absolute',
) {
  if (scrollElm) {
    if (position) {
      const viewPortElm = scrollElm.firstChild as HTMLElement;

      if (viewPortElm) {
        viewPortElm.style.position = position;
      }
    }
  }
}
