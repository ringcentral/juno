import { getRefElement, RefOrElementOrCallback } from './getRefElement';

/**
 * get current input element selection position and is that selectRange state
 */
export function getSelectionPosition<
  T extends HTMLInputElement | HTMLTextAreaElement,
>(sourceTarget: RefOrElementOrCallback<T>) {
  const input = getRefElement(sourceTarget);

  const currentPosition = input?.selectionStart;
  const currentPositionEnd = input?.selectionEnd;
  const isSelectRange = currentPosition !== currentPositionEnd;

  return {
    isSelectRange,
    position: { start: currentPosition || 0, end: currentPositionEnd || 0 },
  };
}

/**
 * set input element selection position position,
 * if you need scroll that into view set `scrollIntoView` as true
 */
export function setSelectionPosition<
  T extends HTMLInputElement | HTMLTextAreaElement,
>(
  target: RefOrElementOrCallback<T>,
  options: {
    start: number | null;
    end: number | null;
    direction?: 'forward' | 'backward' | 'none' | undefined;
    scrollIntoView?: boolean;
  },
) {
  const elm = getRefElement(target);

  if (elm && options.start !== null && options.end !== null) {
    // * use blur and refocus to refocus position into view
    if (options.scrollIntoView) elm.blur();

    elm.setSelectionRange(options.start, options.end, options.direction);

    if (options.scrollIntoView) elm.focus();
  }
}

/** clean whole selection */
export function clearWindowSelection() {
  if (window.getSelection) {
    const selection = window.getSelection();

    if (selection) {
      // Chrome
      selection.empty?.();
      // Firefox
      selection.removeAllRanges?.();
    }
  }
}
