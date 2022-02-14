import { RefObject } from 'react';

/**
 * get current input element selection position and is that selectRange state
 */
export function getSelectionPosition(inputRef: RefObject<HTMLInputElement>) {
  const currentPosition = inputRef.current?.selectionStart;
  const currentPositionEnd = inputRef.current?.selectionEnd;
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
export function setSelectionPosition(
  inputRef: RefObject<HTMLInputElement>,
  options: {
    start: number | null;
    end: number | null;
    direction?: 'forward' | 'backward' | 'none' | undefined;
    scrollIntoView?: boolean;
  },
) {
  const elm = inputRef.current;

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
