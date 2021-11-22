import React, { ComponentProps, forwardRef } from 'react';

import MuiButtonGroup from '@material-ui/core/ButtonGroup';

import { RcBaseProps, styled, useThemeProps } from '../../../foundation';

type RcButtonGroupProps = {} & RcBaseProps<
  ComponentProps<typeof MuiButtonGroup>,
  'color' | 'variant' | 'size'
>;

const _RcButtonGroup = forwardRef<any, RcButtonGroupProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcButtonGroup' });

  return <MuiButtonGroup ref={ref} {...props} />;
});

const RcButtonGroup = styled(_RcButtonGroup)``;

RcButtonGroup.defaultProps = {};

export { RcButtonGroup };
export type { RcButtonGroupProps };
