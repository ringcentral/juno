import React, { ComponentProps, forwardRef } from 'react';

import { styled } from '../../../../foundation';
import DeleteCircle from '../../../../icon/DeleteCircle';
import { RcIconButton } from '../../../Buttons/IconButton';

const _ClearIconButton = forwardRef<any, ComponentProps<typeof RcIconButton>>(
  ({ onMouseDown, ...rest }, ref) => {
    return (
      <RcIconButton
        ref={ref}
        type="button"
        aria-hidden
        variant="plain"
        symbol={DeleteCircle}
        tabIndex={-1}
        // * for prevent focus change
        onMouseDown={(e: any) => {
          e.preventDefault();
          onMouseDown?.(e);
        }}
        {...rest}
      />
    );
  },
);

export const ClearIconButton = styled(_ClearIconButton)``;
