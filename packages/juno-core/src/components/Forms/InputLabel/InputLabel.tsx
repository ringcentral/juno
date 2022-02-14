import React, { ComponentProps, forwardRef } from 'react';

import MuiInputLabel from '@material-ui/core/InputLabel';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { StyledInputLabel } from './styles';
import { RcInputLabelClasses } from './utils';

type RcInputLabelProps = {} & RcBaseProps<ComponentProps<typeof MuiInputLabel>>;

const _RcInputLabel = forwardRef<any, RcInputLabelProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcInputLabel' });
  const { classes, children } = props;

  return (
    <StyledInputLabel
      {...props}
      ref={ref}
      classes={combineClasses(RcInputLabelClasses, classes)}
    >
      {children}
    </StyledInputLabel>
  );
});

const RcInputLabel = styled(_RcInputLabel)``;

RcInputLabel.defaultProps = {};

RcInputLabel.displayName = 'RcInputLabel';

export { RcInputLabel };
export type { RcInputLabelProps };
