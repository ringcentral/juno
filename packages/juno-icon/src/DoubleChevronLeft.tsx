import React, { forwardRef, memo } from 'react';

const DoubleChevronLeft = memo(
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
        <path d="M5 4a1 1 0 011 1v22a1 1 0 01-2 0V5a1 1 0 011-1zm12.314 2.101a.999.999 0 010 1.414L9.827 15H27a1 1 0 010 2H9.829l7.485 7.485a.999.999 0 11-1.414 1.414l-9.192-9.192a.999.999 0 010-1.414L15.9 6.101a.999.999 0 011.414 0z" />
      </svg>
    ),
  ),
);
DoubleChevronLeft.displayName = 'DoubleChevronLeft';
DoubleChevronLeft['iconName'] = 'double-chevron_left';
export default DoubleChevronLeft;
