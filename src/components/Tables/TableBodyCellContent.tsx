import React, { forwardRef } from 'react';
import { styled } from '../../foundation';
import { RcTypography, RcTypographyProps } from '../Typography';
import { COLUMN_TEXT_ALIGN } from './types';

type RcTableBodyCellContentProps = {
  readonly textAlign?: COLUMN_TEXT_ALIGN;
} & RcTypographyProps;

const _RcTableBodyCellContent = forwardRef<any, RcTableBodyCellContentProps>(
  ({ children, noWrap = true, ...rest }, ref) => (
    <RcTypography
      ref={ref}
      noWrap={noWrap}
      component="div"
      color="neutral.f05"
      {...rest}
    >
      {children}
    </RcTypography>
  ),
);

const RcTableBodyCellContent = styled(_RcTableBodyCellContent)`
  text-align: ${({ textAlign }) => textAlign};
`;

export { RcTableBodyCellContent };
