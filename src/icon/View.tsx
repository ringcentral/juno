import React, { forwardRef, memo } from 'react';

const View = memo(
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
        <path d="M16 5c8.284 0 15 8 15 11s-6.716 11-15 11C7.716 27 1 19 1 16S7.716 5 16 5zm0 5a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z" />
      </svg>
    ),
  ),
);
View.displayName = 'View';
View['iconName'] = 'view';
export default View;
