import React, { forwardRef, memo } from 'react';

const ZoomOut = memo(
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
        <path d="M28 16a1 1 0 01-1 1H5a1 1 0 010-2h22a1 1 0 011 1z" />
      </svg>
    ),
  ),
);
ZoomOut.displayName = 'ZoomOut';
ZoomOut['iconName'] = 'zoom-out';
export default ZoomOut;
