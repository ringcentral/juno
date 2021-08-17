import React, { forwardRef, memo } from 'react';

const ArrowLeft2 = memo(
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
        <path d="M18.95 9.636a.999.999 0 010 1.414L14 16l4.95 4.95a.999.999 0 11-1.414 1.414l-5.657-5.657a.999.999 0 010-1.414l5.657-5.657a.999.999 0 011.414 0z" />
      </svg>
    ),
  ),
);
ArrowLeft2.displayName = 'ArrowLeft2';
ArrowLeft2['iconName'] = 'arrow_left';
export default ArrowLeft2;
