import React, { forwardRef, memo } from 'react';

const ResetZoom = memo(
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
        <path d="M27 3a2 2 0 012 2v22a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h22zm-1 2H6a1 1 0 00-1 1v20a1 1 0 001 1h20a1 1 0 001-1V6a1 1 0 00-1-1zm-2 12a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 010-2h5v-5a1 1 0 011-1zM14 7a1 1 0 010 2H9v5a1 1 0 01-2 0V8a1 1 0 011-1h6z" />
      </svg>
    ),
  ),
);
ResetZoom.displayName = 'ResetZoom';
ResetZoom['iconName'] = 'reset-zoom';
export default ResetZoom;
