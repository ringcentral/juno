import React, { forwardRef, memo } from 'react';

const Dial = memo(
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
        <path d="M28 3a1 1 0 00-1 1v12a1 1 0 01-1 1l-19.586.001 6.536-6.536a.999.999 0 10-1.414-1.414l-8.243 8.243a.999.999 0 000 1.414l8.243 8.243a.999.999 0 101.414-1.414l-6.536-6.535L27 19.001a2 2 0 002-2v-13a1 1 0 00-1-1z" />
      </svg>
    ),
  ),
);
Dial.displayName = 'Dial';
Dial['iconName'] = 'dial';
export default Dial;
