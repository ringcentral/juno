import React, { forwardRef } from 'react';

import { styled } from '../../../foundation';
import { RcTextField, RcTextFieldProps } from '../../Forms/TextField';
import { clearBtnInactiveStyle } from '../../Forms/TextField/TextField/styles';
import { RcDownshiftProps } from '../Downshift';
import { RcDownshiftInputClasses } from '../utils';

type StyledTextFieldProps = {
  hasTags: boolean;
} & RcTextFieldProps &
  Pick<RcDownshiftProps, 'renderInput'>;

const _StyledTextField = forwardRef<any, StyledTextFieldProps>(
  ({ hasTags, renderInput, ...rest }, ref) => {
    if (renderInput) {
      const child = renderInput({ ...rest, ref });

      return child as any;
    }
    return <RcTextField ref={ref} {...rest} />;
  },
);

export const StyledTextField = styled(_StyledTextField)`
  .${RcDownshiftInputClasses.input} {
    flex: 1;
    min-width: 30px;
  }

  ${({ hasTags }) => hasTags && clearBtnInactiveStyle}
`;
