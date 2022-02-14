import React, { forwardRef, memo } from 'react';

const ArrowLeft = memo(
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
        <path d="M11.707 15.293l5.586-5.586a.999.999 0 011.707.707v11.172a1 1 0 01-1.707.707l-5.586-5.586a.999.999 0 010-1.414z" />
      </svg>
    ),
  ),
);
ArrowLeft.displayName = 'ArrowLeft';
ArrowLeft['iconName'] = 'arrow-left';
export default ArrowLeft;
