import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core/Typography';
import React, { ElementType } from 'react';

import { typography } from '../../../foundation';
import styled from '../../../foundation/styled-components';
import { RcBaseProps } from '../../../foundation/typings';

export type RcTypographyVariant = MuiTypographyProps['variant'];

type RcTypographyProps = {
  dependencies?: any[];
  variant?: RcTypographyVariant;
  component?: ElementType;
} & RcBaseProps<MuiTypographyProps, 'variant'>;
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Typography/Typography.js
const MuiTypographyVariant: RcTypographyVariant[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline',
  'srOnly',
  'inherit',
];
const WrappedMuiTypography = React.forwardRef(
  (
    {
      variant,
      component,
      ...rest
    }: Omit<RcTypographyProps, 'variant'> & { variant?: any },
    ref,
  ) => {
    return (
      <MuiTypography
        {...rest}
        component={component as ElementType}
        ref={ref}
        variant={
          variant && MuiTypographyVariant.includes(variant)
            ? variant
            : undefined
        }
      />
    );
  },
);

/** @deprecated please not use this component anymore */
const RcTypography = styled(WrappedMuiTypography)`
  && {
    ${({ variant }) => (variant === 'inherit' ? '' : typography(variant))}
  }
`;

RcTypography.displayName = 'RcTypography';
RcTypography.defaultProps = {
  variant: 'body1',
};

export { RcTypographyProps, RcTypography };
