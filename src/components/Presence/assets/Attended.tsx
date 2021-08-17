import React, { forwardRef, memo } from 'react';

const Attended = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        ref={svgRef}
        {...props}
      >
        <path d="M30 10.393L24.509 5 12.96 16.253l-5.459-5.301L2 16.314 12.963 27z" />
      </svg>
    ),
  ),
);
Attended.displayName = 'Attended';
Attended['iconName'] = 'attended';
export default Attended;
