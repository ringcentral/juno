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
  const {
    classes,
    InputProps: InputPropsProp,
    rows: rowsProp,
    minRows,
    maxRows,
    ...rest
  } = props;
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

  let rows = rowsProp;

  // when have minRows and maxRows, not set rows to Mui
  if (minRows || maxRows) {
    rows = undefined;
  }

  return (
    <RcTextField
      {...rest}
      rows={rows}
      minRows={minRows}
      maxRows={maxRows}
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

export { RcTextarea };
export type { RcTextareaProps };
