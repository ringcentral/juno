import React, { forwardRef, memo } from 'react';

const ConferenceBorder = memo(
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
        <path d="M28.758 21.902a3 3 0 11-3 5.196 3 3 0 113-5.196zM7.34 23a3 3 0 11-5.196 3 3 3 0 015.196-3zM16 10a8 8 0 110 16 8 8 0 010-16zm10.392 14a1 1 0 101.733 1 1 1 0 00-1.733-1zm-22.15-.366a1 1 0 101.001 1.732 1 1 0 00-1.001-1.732zM16 12a6 6 0 100 12 6 6 0 000-12zm0-10a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z" />
      </svg>
    ),
  ),
);
ConferenceBorder.displayName = 'ConferenceBorder';
ConferenceBorder['iconName'] = 'conference_border';
export default ConferenceBorder;
