import React, { forwardRef, memo } from 'react';

const ArrowRight = memo(
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
        <path d="M13.05 9.636a.999.999 0 000 1.414L18 16l-4.95 4.95a.999.999 0 101.414 1.414l5.657-5.657a.999.999 0 000-1.414l-5.657-5.657a.999.999 0 00-1.414 0z" />
      </svg>
    ),
  ),
);
ArrowRight.displayName = 'ArrowRight';
ArrowRight['iconName'] = 'arrow_right';
export default ArrowRight;
