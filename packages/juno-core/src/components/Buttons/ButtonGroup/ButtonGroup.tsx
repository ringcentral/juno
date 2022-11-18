import React, { ComponentProps, forwardRef } from 'react';

import MuiButtonGroup from '@material-ui/core/ButtonGroup';

import { RcBaseProps, styled, useThemeProps } from '../../../foundation';
import {
  RcButtonDefaultSize,
  RcButtonDefaultColor,
  RcButtonDefaultVariant,
} from '../Button';

type RcButtonGroupProps = {} & RcBaseProps<
  ComponentProps<typeof MuiButtonGroup>,
  'color' | 'variant' | 'size'
>;

const _RcButtonGroup = forwardRef<any, RcButtonGroupProps>((inProps, ref) => {
  const { ...rest } = useThemeProps({ props: inProps, name: 'RcButtonGroup' });

  return (
    <MuiButtonGroup
      ref={ref}
      size={RcButtonDefaultSize}
      color={RcButtonDefaultColor}
      variant={RcButtonDefaultVariant}
      {...rest}
    />
  );
});

const RcButtonGroup = styled(_RcButtonGroup)``;

export { RcButtonGroup };
export type { RcButtonGroupProps };
