import React, { forwardRef, useMemo } from 'react';

import {
  combineProps,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { RcTextField, RcTextFieldProps } from '../TextField';
import { TextareaStyle } from './styles';
import { RcTextareaInputClasses } from './utils';

type RcTextareaProps = {} & RcBaseProps<
  RcTextFieldProps,
  'clearBtn' | 'clearButtonProps' | 'clearLabel' | 'clearAriaLabel'
>;

const _RcTextarea = forwardRef<any, RcTextareaProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcTextarea' });
  const { classes, InputProps: InputPropsProp, ...rest } = props;
  const InputProps = useMemo(
    () =>
      combineProps(
        {
          classes: RcTextareaInputClasses,
        },
        InputPropsProp,
      ),
    [InputPropsProp],
  );

  return (
    <RcTextField
      {...rest}
      multiline
      InputProps={InputProps}
      clearBtn={false}
      ref={ref}
    />
  );
});

/** @release */
const RcTextarea = styled(_RcTextarea)`
  ${TextareaStyle}
`;

RcTextarea.defaultProps = {
  rows: 3,
};

RcTextarea.displayName = 'RcTextarea';

export { RcTextarea, RcTextareaProps };
