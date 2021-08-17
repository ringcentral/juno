import React, { forwardRef, memo } from 'react';

const Signal2 = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        {...props}
      >
        <path d="M6 12a4 4 0 110 8 4 4 0 010-8zm10 0a4 4 0 110 8 4 4 0 010-8zm10 0a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 10-.001 3.999A2 2 0 0026 14z" />
      </svg>
    ),
  ),
);
Signal2.displayName = 'Signal2';
Signal2['iconName'] = 'signal-2';
export default Signal2;
