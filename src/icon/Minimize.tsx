import React, { forwardRef, memo } from 'react';

const Minimize = memo(
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
        <path d="M5.333 18v-4h21.333v4z" />
      </svg>
    ),
  ),
);
Minimize.displayName = 'Minimize';
Minimize['iconName'] = 'minimize';
export default Minimize;
