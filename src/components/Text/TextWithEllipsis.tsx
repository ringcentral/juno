import { Typography as MuiTypography } from '@material-ui/core';
import React, { ComponentProps, forwardRef } from 'react';

import { ellipsis, useDeprecatedLog } from '../../foundation';
import styled from '../../foundation/styled-components';

const _RcTextWithEllipsis = forwardRef<
  any,
  ComponentProps<typeof MuiTypography>
>((props, ref) => {
  useDeprecatedLog({
    component: 'RcTextWithEllipsis',
    message:
      'should not use that, just use `RcText` with `titleWhenOverflow` and `flexFull`',
  });

  return <MuiTypography {...props} ref={ref} />;
});

/** @deprecated should not use that, just use `RcText` with `titleWhenOverflow` and `flexFull` */
const RcTextWithEllipsis = styled(_RcTextWithEllipsis)`
  ${ellipsis()};
  flex: 1 1 auto;
`;

export { RcTextWithEllipsis };
