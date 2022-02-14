import React, { forwardRef, memo } from 'react';

const PauseCircle = memo(
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
        <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm-3 8a1 1 0 00-.993.883L12 11v10a1 1 0 001.993.117L14 21V11a1 1 0 00-1-1zm6 0a1 1 0 00-.993.883L18 11v10a1 1 0 001.993.117L20 21V11a1 1 0 00-1-1z" />
      </svg>
    ),
  ),
);
PauseCircle.displayName = 'PauseCircle';
PauseCircle['iconName'] = 'pause_circle';
export default PauseCircle;
