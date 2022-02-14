import React, { ComponentProps, forwardRef } from 'react';

import MuiRadioGroup from '@material-ui/core/RadioGroup';

import { RcBaseProps, styled, useThemeProps } from '../../../foundation';

type RcRadioGroupProps = {} & RcBaseProps<ComponentProps<typeof MuiRadioGroup>>;

const _RcRadioGroup = forwardRef<any, RcRadioGroupProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcRadioGroup' });
  const { classes: classesProp, children, ...rest } = props;
  return (
    <MuiRadioGroup {...rest} ref={ref} classes={classesProp}>
      {children}
    </MuiRadioGroup>
  );
});

const RcRadioGroup = styled(_RcRadioGroup)``;

RcRadioGroup.defaultProps = {};

RcRadioGroup.displayName = 'RcRadioGroup';

export { RcRadioGroup };
export type { RcRadioGroupProps };
