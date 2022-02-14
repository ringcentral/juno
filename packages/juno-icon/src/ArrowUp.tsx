import React, { forwardRef, memo } from 'react';

const ArrowUp = memo(
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
        <path d="M16.707 11.707l5.586 5.586A.999.999 0 0121.586 19H10.414a1 1 0 01-.707-1.707l5.586-5.586a.999.999 0 011.414 0z" />
      </svg>
    ),
  ),
);
ArrowUp.displayName = 'ArrowUp';
ArrowUp['iconName'] = 'arrow-up';
export default ArrowUp;
