import React, { forwardRef, memo } from 'react';

const AlignLeft = memo(
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
        <path d="M27 24a1 1 0 010 2H5a1 1 0 010-2h22zm-8-9a1 1 0 010 2H5a1 1 0 010-2h14zm8-9a1 1 0 010 2H5a1 1 0 010-2h22z" />
      </svg>
    ),
  ),
);
AlignLeft.displayName = 'AlignLeft';
AlignLeft['iconName'] = 'align-left';
export default AlignLeft;
