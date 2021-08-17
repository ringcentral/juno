import React, { FunctionComponent } from 'react';

import { RcTypography, RcTypographyProps } from '../../components/Typography';

export const Title: FunctionComponent<RcTypographyProps> = ({
  children,
  ...rest
}) => {
  return (
    <RcTypography
      color="neutral.f06"
      variant="headline1"
      paragraph
      display="block"
      {...rest}
    >
      {children}
    </RcTypography>
  );
};
