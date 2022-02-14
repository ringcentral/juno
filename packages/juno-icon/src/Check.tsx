import React, { forwardRef, memo } from 'react';

const Check = memo(
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
        <path d="M24.678 8.293a.999.999 0 011.497 1.32l-.083.094-12.314 12.314a1 1 0 01-1.32.083l-.094-.083-7.071-7.071a.999.999 0 011.32-1.497l.094.083L13.07 19.9 24.678 8.293z" />
      </svg>
    ),
  ),
);
Check.displayName = 'Check';
Check['iconName'] = 'check';
export default Check;
