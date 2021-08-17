import React, { forwardRef, memo } from 'react';

const MoreHoriz = memo(
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
        <path d="M9 16a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm9.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm9.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
  ),
);
MoreHoriz.displayName = 'MoreHoriz';
MoreHoriz['iconName'] = 'more_horiz';
export default MoreHoriz;
