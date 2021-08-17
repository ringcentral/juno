import React, { forwardRef } from 'react';

import { styled } from '../../../foundation';

const _StyledSvg = forwardRef<any, any>(({ children, ...props }, ref) => {
  return React.cloneElement(children, { ref, ...props });
});

export const StyledSvg = styled(_StyledSvg)`
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  pointer-events: none;
`;
