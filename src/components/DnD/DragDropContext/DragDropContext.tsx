import React, { FunctionComponent } from 'react';

import {
  DragDropContext as RBDDragDropContext,
  DragDropContextProps,
} from 'react-beautiful-dnd';

import { useThemeProps } from '../../../foundation';
import { GlobalDraggableStyle } from './styles';

type RcDragDropContextProps = DragDropContextProps;

const RcDragDropContext: FunctionComponent<RcDragDropContextProps> = (
  inProps,
) => {
  const props = useThemeProps({ props: inProps, name: 'RcDragDropContext' });
  return (
    <>
      <GlobalDraggableStyle />
      <RBDDragDropContext {...props} />
    </>
  );
};

RcDragDropContext.defaultProps = {};

RcDragDropContext.displayName = 'RcDragDropContext';

export { RcDragDropContext };
export type { RcDragDropContextProps };
