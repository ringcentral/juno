import React, { forwardRef } from 'react';
import clsx from 'clsx';
import {
  Direction,
  Draggable as RBDDraggable,
  DraggableProps,
  DraggableProvided,
  DraggableRubric,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';

import { RcClassesProps, styled, useThemeProps } from '../../../foundation';
import { getDirectionOnlyItemStyle, RcDraggableClasses } from './utils';

type RcDraggableProvided = DraggableProvided & {
  draggableProps: {
    className?: string;
  };
};

type RcDraggableStateSnapshot = DraggableStateSnapshot;

type RcDraggableRubric = DraggableRubric;

type RcDraggableChildrenFn = (
  provided: RcDraggableProvided,
  snapshot: RcDraggableStateSnapshot,
  rubric: RcDraggableRubric,
) => React.ReactElement<HTMLElement>;

type RcDraggableProps = {
  directionOnly?: Direction;
  children: RcDraggableChildrenFn;
} & RcClassesProps<'root' | 'isDragging'> &
  Omit<DraggableProps, 'children'>;

const _RcDraggable = forwardRef<any, RcDraggableProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcDraggable' });
  const { classes, children, directionOnly, ...rest } = props;

  return (
    <RBDDraggable {...rest} ref={ref}>
      {(provided, snapshot, ...args) => {
        const preStyle = provided.draggableProps.style;
        const directionOnlyStyle = getDirectionOnlyItemStyle(
          directionOnly,
          preStyle,
        );

        provided.draggableProps.style = directionOnlyStyle;

        provided.draggableProps['className'] = clsx(
          RcDraggableClasses.root,
          classes?.root,
          snapshot.isDragging &&
            clsx(RcDraggableClasses.isDragging, classes?.isDragging),
        );

        return children(provided, snapshot, ...args);
      }}
    </RBDDraggable>
  );
});

const RcDraggable = styled(_RcDraggable)``;

RcDraggable.defaultProps = {};

RcDraggable.displayName = 'RcDraggable';

export {
  RcDraggable,
  RcDraggableProps,
  RcDraggableProvided,
  RcDraggableStateSnapshot,
  RcDraggableRubric,
};
