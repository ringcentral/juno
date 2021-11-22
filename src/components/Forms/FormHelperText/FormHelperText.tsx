import React, { ComponentProps, forwardRef } from 'react';

import MuiFormHelperText from '@material-ui/core/FormHelperText';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { StyledFormHelperText } from './styles';
import { RcFormHelperTextClasses } from './utils';

type RcFormHelperTextProps = {} & RcBaseProps<
  ComponentProps<typeof MuiFormHelperText>
>;

const _RcFormHelperText = forwardRef<any, RcFormHelperTextProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcFormHelperText' });
    const { classes, children } = props;

    return (
      <StyledFormHelperText
        {...props}
        ref={ref}
        classes={combineClasses(RcFormHelperTextClasses, classes)}
      >
        {children}
      </StyledFormHelperText>
    );
  },
);

const RcFormHelperText = styled(_RcFormHelperText)``;

RcFormHelperText.defaultProps = {};

RcFormHelperText.displayName = 'RcFormHelperText';

export { RcFormHelperText };
export type { RcFormHelperTextProps };
