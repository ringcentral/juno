import { ListRange } from '../react-virtuoso';

export function isOutOfRange(focusedIndex: number, range: ListRange) {
  return focusedIndex < range.startIndex || focusedIndex > range.endIndex;
}
