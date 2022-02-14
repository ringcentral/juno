import React, { forwardRef, memo } from 'react';

const AlignCenter = memo(
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
        <path d="M27 24a1 1 0 010 2H5a1 1 0 010-2h22zm-4-9a1 1 0 010 2H9a1 1 0 010-2h14zm4-9a1 1 0 010 2H5a1 1 0 010-2h22z" />
      </svg>
    ),
  ),
);
AlignCenter.displayName = 'AlignCenter';
AlignCenter['iconName'] = 'align-center';
export default AlignCenter;
