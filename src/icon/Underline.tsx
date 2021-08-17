import React, { forwardRef, memo } from 'react';

const Underline = memo(
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
        <path d="M24 26a1 1 0 010 2H8a1 1 0 010-2h16zm0-22a1 1 0 011 1v10c0 4.971-4.029 9-9 9s-9-4.029-9-9V5a1 1 0 012 0v10a7 7 0 006.759 6.996L16 22a7 7 0 006.996-6.759L23 15V5a1 1 0 011-1z" />
      </svg>
    ),
  ),
);
Underline.displayName = 'Underline';
Underline['iconName'] = 'underline';
export default Underline;
