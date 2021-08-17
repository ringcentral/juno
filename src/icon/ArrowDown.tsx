import React, { forwardRef, memo } from 'react';

const ArrowDown = memo(
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
        <path d="M16.707 20.293l5.586-5.586A.999.999 0 0021.586 13H10.414a1 1 0 00-.707 1.707l5.586 5.586a.999.999 0 001.414 0z" />
      </svg>
    ),
  ),
);
ArrowDown.displayName = 'ArrowDown';
ArrowDown['iconName'] = 'arrow-down';
export default ArrowDown;
