import React, { forwardRef, memo } from 'react';

const DateBorder = memo(
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
        <path d="M26 4h-4V3a1 1 0 00-2 0v1h-8V3a1 1 0 00-2 0v1H6a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2zm-1 22H7a1 1 0 01-1-1V12h20v13a1 1 0 01-1 1zm1-16H6V7a1 1 0 011-1h3v1a1 1 0 002 0V6h8v1a1 1 0 002 0V6h3a1 1 0 011 1v3z" />
      </svg>
    ),
  ),
);
DateBorder.displayName = 'DateBorder';
DateBorder['iconName'] = 'date_border';
export default DateBorder;
