import React, { forwardRef, memo } from 'react';

const PauseBorder = memo(
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
        <path d="M11 25H9a1 1 0 01-1-1V8a1 1 0 011-1h2a1 1 0 011 1v16a1 1 0 01-1 1zm1-20H8a2 2 0 00-2 2v18a2 2 0 002 2h4a2 2 0 002-2V7a2 2 0 00-2-2zm11 20h-2a1 1 0 01-1-1V8a1 1 0 011-1h2a1 1 0 011 1v16a1 1 0 01-1 1zm1-20h-4a2 2 0 00-2 2v18a2 2 0 002 2h4a2 2 0 002-2V7a2 2 0 00-2-2z" />
      </svg>
    ),
  ),
);
PauseBorder.displayName = 'PauseBorder';
PauseBorder['iconName'] = 'pause_border';
export default PauseBorder;
