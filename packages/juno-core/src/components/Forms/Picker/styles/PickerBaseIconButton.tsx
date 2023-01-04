import React, { ComponentProps, forwardRef } from 'react';

import { RcIconButton } from '../../../Buttons/IconButton';

export type PickerBaseIconButtonProps = ComponentProps<typeof RcIconButton> & {
  selected?: boolean;
  hidden?: boolean;
};

export const PickerBaseIconButton = forwardRef<any, PickerBaseIconButtonProps>(
  (props, ref) => {
    const { children, selected, hidden, ...rest } = props;

    return (
      <RcIconButton
        elevation={0}
        activeElevation={0}
        ref={ref}
        variant={selected ? 'contained' : 'round'}
        color={selected ? 'interactive.b02' : 'neutral.f06'}
        data-hidden={hidden}
        size="xsmall"
        focusVariant="focusRing"
        {...rest}
      >
        {children}
      </RcIconButton>
    );
  },
);

PickerBaseIconButton.displayName = 'PickerBaseIconButton';
