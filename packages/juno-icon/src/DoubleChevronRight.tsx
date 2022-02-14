import React, { forwardRef, memo } from 'react';

const DoubleChevronRight = memo(
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
        <path d="M26.899 4a1 1 0 00-1 1v22a1 1 0 002 0V5a1 1 0 00-1-1zM14.586 6.101a.999.999 0 000 1.414L22.073 15H5a1 1 0 000 2h17.07l-7.485 7.485a.999.999 0 101.414 1.414l9.192-9.192a.999.999 0 000-1.414l-9.192-9.192a.999.999 0 00-1.414 0z" />
      </svg>
    ),
  ),
);
DoubleChevronRight.displayName = 'DoubleChevronRight';
DoubleChevronRight['iconName'] = 'double-chevron_right';
export default DoubleChevronRight;
