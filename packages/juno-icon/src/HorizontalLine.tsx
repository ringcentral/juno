import React, { forwardRef, memo } from 'react';

const HorizontalLine = memo(
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
        <path d="M5 15h22a1 1 0 010 2H5a1 1 0 010-2z" />
      </svg>
    ),
  ),
);
HorizontalLine.displayName = 'HorizontalLine';
HorizontalLine['iconName'] = 'horizontal-line';
export default HorizontalLine;
