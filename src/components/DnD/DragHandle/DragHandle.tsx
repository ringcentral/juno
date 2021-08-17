import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { RcClassesProps, styled, useThemeProps } from '../../../foundation';
import { dragHandleStyle } from './styles';
import { RcDragHandleClasses } from './utils';
import { RcIcon } from '../../Icon';
import DraggableHandle from '../../../icon/DragableArea';

type RcDragHandleClassesType = RcClassesProps<'root'>;

type RcDragHandleProps = {
  className?: string;
} & RcDragHandleClassesType;

const defaultChildren = <RcIcon size="xsmall" symbol={DraggableHandle} />;

const _DragHandle = forwardRef<any, RcDragHandleProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcDragHandle' });
  const { children = defaultChildren, className, ...rest } = props;
  const ClassName = clsx(RcDragHandleClasses.root, className);

  return (
    <div {...rest} className={ClassName} ref={ref}>
      {children}
    </div>
  );
});

const RcDragHandle = styled(_DragHandle)`
  ${dragHandleStyle}
`;

RcDragHandle.defaultProps = {};

RcDragHandle.displayName = 'RcDragHandle';

export { RcDragHandle, RcDragHandleProps };
