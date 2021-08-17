import React, { forwardRef, memo } from 'react';

const Repeat = memo(
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
        <path d="M27 15a1 1 0 00-1 1v6a1 1 0 01-1 1l-17.829.001 2.536-2.536a.999.999 0 10-1.414-1.414L4.05 23.294a.999.999 0 000 1.414l4.243 4.243a.999.999 0 101.414-1.414l-2.536-2.535L26 25.001a2 2 0 002-2v-7a1 1 0 00-1-1zM22.293 3.05a.999.999 0 000 1.414l2.536 2.535L6 7a2 2 0 00-2 2v7a1 1 0 002 0v-6a1 1 0 011-1l17.829-.001-2.536 2.536a.999.999 0 101.414 1.414l4.243-4.243a.999.999 0 000-1.414l-4.243-4.243a.999.999 0 00-1.414 0z" />
      </svg>
    ),
  ),
);
Repeat.displayName = 'Repeat';
Repeat['iconName'] = 'repeat';
export default Repeat;
