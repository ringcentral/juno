import { ListRange } from '../Virtuoso';

export function isOutOfRange(focusedIndex: number, range: ListRange) {
  return focusedIndex < range.startIndex || focusedIndex > range.endIndex;
}
