import React, { forwardRef, memo } from 'react';

const ZoomIn = memo(
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
        <path d="M16 4a1 1 0 011 1v10h10a1 1 0 010 2H17v10a1 1 0 01-2 0V17H5a1 1 0 010-2h10V5a1 1 0 011-1z" />
      </svg>
    ),
  ),
);
ZoomIn.displayName = 'ZoomIn';
ZoomIn['iconName'] = 'zoom-in';
export default ZoomIn;
