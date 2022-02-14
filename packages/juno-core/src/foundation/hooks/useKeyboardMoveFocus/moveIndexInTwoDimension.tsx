export type MoveIndexInTwoDimensionalOptions = {
  /** current index */
  currIndex: number;
  /** column number with that two dimensional */
  columns: number;
  /** total number of items */
  total: number;
  /**
   * if that touch boundary, is that can move to next available infinite
   *
   * - when set value as `order`, that will increase or decrease when `ArrowLeft` or `ArrowRight` touch boundary
   */
  infinite?: boolean | 'order';
};

/**
 * that can move index in column array
 */
export function moveIndexInTwoDimension(
  direction: string,
  options: MoveIndexInTwoDimensionalOptions,
): number {
  const { currIndex, columns, total, infinite } = options;

  // start index never small than 0
  // const index = Math.max(currIndex, 0);

  const lastIndex = total - 1;
  const isInOrder = infinite === 'order';
  const fillTotal = Math.ceil(total / columns) * columns;

  let resultIndex: number;

  switch (direction) {
    case 'ArrowUp': {
      const toIndex =
        (Math.max(currIndex, 0) - columns + fillTotal) % fillTotal;

      resultIndex = infinite ? toIndex : Math.min(toIndex, currIndex);
      break;
    }
    case 'ArrowRight': {
      if (isInOrder) {
        const tmp = currIndex + 1;
        resultIndex = tmp > lastIndex ? 0 : tmp;
        break;
      }

      const toIndex =
        Math.floor(currIndex / columns) * columns + ((currIndex + 1) % columns);

      resultIndex = infinite ? toIndex : Math.max(toIndex, currIndex);
      break;
    }
    case 'ArrowDown': {
      const toIndex = (currIndex + columns) % fillTotal;

      resultIndex = infinite ? toIndex : Math.max(toIndex, currIndex);
      break;
    }
    case 'ArrowLeft': {
      if (isInOrder) {
        const tmp = currIndex - 1;
        resultIndex = tmp < 0 ? lastIndex : tmp;
        break;
      }

      const toIndex =
        Math.floor(currIndex / columns) * columns +
        ((currIndex - 1 + columns) % columns);

      resultIndex = infinite ? toIndex : Math.min(toIndex, currIndex);
      break;
    }
    case 'Home':
      resultIndex = 0;
      break;
    case 'End':
      resultIndex = lastIndex;
      break;
    default:
      resultIndex = currIndex;
  }

  if (!infinite && resultIndex >= total) {
    return currIndex;
  }

  // * when that bigger then sourceTotal, mean that touch end line
  // * move to current full latest and move again.
  if (resultIndex >= total) {
    if (direction === 'ArrowRight') {
      resultIndex = fillTotal - 1;
    }

    return moveIndexInTwoDimension(direction, {
      ...options,
      currIndex: resultIndex,
    });
  }

  return resultIndex;
}
