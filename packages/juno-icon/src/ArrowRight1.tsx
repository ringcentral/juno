import React, { forwardRef, memo } from 'react';

const ArrowRight1 = memo(
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
        <path d="M20.293 15.293l-5.586-5.586a.999.999 0 00-1.707.707v11.172a1 1 0 001.707.707l5.586-5.586a.999.999 0 000-1.414z" />
      </svg>
    ),
  ),
);
ArrowRight1.displayName = 'ArrowRight1';
ArrowRight1['iconName'] = 'arrow_right1';
export default ArrowRight1;
