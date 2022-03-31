import React, { ComponentProps, forwardRef, ComponentType } from 'react';

import { DeleteCircle } from '@ringcentral/juno-icon';

import { styled } from '../../../../foundation';
import { RcIconButton } from '../../../Buttons/IconButton';
import { RcBox } from '../../../Box';
import { withTooltip, WithTooltipProps } from '../../../Tooltip';

const FakeButton = styled(RcIconButton)`
  position: absolute;
  right: 0;
  pointer-events: none;
`;

const _ClearIconButton = forwardRef<any, ComponentProps<typeof RcIconButton>>(
  ({ onMouseDown, size, iconSize, ...rest }, ref) => {
    return (
      <RcBox display="flex" alignItems="center" position="relative">
        <RcIconButton
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
          size={size}
          {...rest}
          useRcTooltip={false}
        />
        {/* for `Tooltip` find button position */}
        <FakeButton variant="plain" as="div" size={size} ref={ref} />
      </RcBox>
    );
  },
);

// TODO: fix this after upgarde ts
export const ClearIconButton = styled(withTooltip(_ClearIconButton) as any)`
  display: flex;
  align-items: center;
  position: relative;
` as ComponentType<WithTooltipProps<ComponentProps<typeof _ClearIconButton>>>;

ClearIconButton.defaultProps = { useRcTooltip: true };
