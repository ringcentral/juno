import React, { forwardRef, memo } from 'react';

const TimeBorder = memo(
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
        <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 2C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zM9 17a1 1 0 010-2h6V7a1 1 0 012 0v9a1 1 0 01-.883.993L16 17H9z" />
      </svg>
    ),
  ),
);
TimeBorder.displayName = 'TimeBorder';
TimeBorder['iconName'] = 'time_border';
export default TimeBorder;
