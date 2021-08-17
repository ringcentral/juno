import React, { forwardRef, memo } from 'react';

const MoreVert = memo(
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
        <path d="M16 23a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0-9.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM16 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
      </svg>
    ),
  ),
);
MoreVert.displayName = 'MoreVert';
MoreVert['iconName'] = 'more_vert';
export default MoreVert;
