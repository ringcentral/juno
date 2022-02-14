import React, { useState } from 'react';

import { RcButton, RcTypography } from '@ringcentral/juno';

/**
 * use for check is that memo correctly,
 *
 * ```tsx
  const button = useCheckRenderButton();
  return (
    <>
      {button}
      ...
    </>
  ```
 */
export const useCheckRenderButton = (label = 'render time') => {
  const [count, setCount] = useState(0);

  return {
    count,
    element: (
      <>
        <RcTypography color="neutral.f06">
          {label}: {count}
        </RcTypography>
        <RcButton onClick={() => setCount(count + 1)}>Click</RcButton>
      </>
    ),
  };
};
