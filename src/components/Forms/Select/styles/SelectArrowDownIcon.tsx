import clsx from 'clsx';
import React, { ComponentProps, forwardRef } from 'react';

import { styled } from '../../../../foundation';
import ArrowDown from '../../../../icon/ArrowDown';
import { RcIcon } from '../../../Icon';

export type SelectArrowDownIconProps = {
  className?: string;
} & ComponentProps<typeof RcIcon>;

const _SelectArrowDownIcon = forwardRef<any, SelectArrowDownIconProps>(
  ({ className, ...rest }, ref) => (
    <RcIcon
      ref={ref}
      className={clsx('MuiSvgIcon-root', className)}
      // TODO: remove when VirtualizeBoxSelect, and VirtualizedLineSelect remove
      color="neutral.f04"
      size="large"
      symbol={ArrowDown}
      {...rest}
    />
  ),
);

export const SelectArrowDownIcon = styled(_SelectArrowDownIcon)``;
