import {
  Direction,
  DraggableProvidedDraggableProps,
} from 'react-beautiful-dnd';

import { RcClasses } from '../../../../foundation';
import { RcDraggableProps } from '../Draggable';

export const RcDraggableClasses = RcClasses<RcDraggableProps>(
  ['root', 'isDragging'],
  'RcDraggable',
);

export const getDirectionOnlyItemStyle = (
  direction?: Direction,
  style?: DraggableProvidedDraggableProps['style'],
): DraggableProvidedDraggableProps['style'] => {
  if (!direction) {
    return style;
  }

  const isVertical = direction === 'vertical';

  const overrideStyles = {};
  const currentTransformMatch =
    style &&
    style.transform &&
    style.transform.match(/translate\((-?\d+)px,\s+(-?\d+)px\)/);

  if (currentTransformMatch) {
    const transform = parseInt(currentTransformMatch[isVertical ? 2 : 1], 10);
    overrideStyles['transform'] = `translate(${isVertical ? 0 : transform}px, ${
      isVertical ? transform : 0
    }px)`;
  }

  return {
    ...style,
    ...overrideStyles,
  };
};
