import React, { forwardRef, memo } from 'react';

const Dialer = memo(
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
        <path d="M7 17a3 3 0 110 6 3 3 0 010-6zm9 0a3 3 0 110 6 3 3 0 010-6zm0 8a3 3 0 110 6 3 3 0 010-6zm9-8a3 3 0 110 6 3 3 0 010-6zM7 9a3 3 0 110 6 3 3 0 010-6zm9 0a3 3 0 110 6 3 3 0 010-6zm9 0a3 3 0 110 6 3 3 0 010-6zM7 1a3 3 0 110 6 3 3 0 010-6zm9 0a3 3 0 110 6 3 3 0 010-6zm9 0a3 3 0 110 6 3 3 0 010-6z" />
      </svg>
    ),
  ),
);
Dialer.displayName = 'Dialer';
Dialer['iconName'] = 'dialer';
export default Dialer;
