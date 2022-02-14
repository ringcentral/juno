import React, { forwardRef } from 'react';

import {
  Droppable as RBDDroppable,
  DroppableProps,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd';

import { styled, useThemeProps } from '../../../foundation';

type RcDroppableProps = DroppableProps;
type RcDroppableProvided = DroppableProvided;
type RcDroppableStateSnapshot = DroppableStateSnapshot;

const _RcDroppable = forwardRef<any, RcDroppableProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcDroppable' });
  const { children, ...rest } = props;
  return (
    <RBDDroppable {...rest} ref={ref}>
      {(...args) => children(...args)}
    </RBDDroppable>
  );
});

const RcDroppable = styled(_RcDroppable)``;

RcDroppable.defaultProps = {};

RcDroppable.displayName = 'RcDroppable';

export { RcDroppable };
export type { RcDroppableProps, RcDroppableProvided, RcDroppableStateSnapshot };
