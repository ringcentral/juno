import React, { forwardRef, memo } from 'react';

const ChevronRight = memo(
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
        <path d="M22.682 14.939a1.5 1.5 0 010 2.121L12.075 27.667a1.5 1.5 0 11-2.121-2.121L19.5 16 9.954 6.454a1.5 1.5 0 112.121-2.121L22.682 14.94z" />
      </svg>
    ),
  ),
);
ChevronRight.displayName = 'ChevronRight';
ChevronRight['iconName'] = 'chevron_right';
export default ChevronRight;
