import React, { forwardRef, memo } from 'react';

const Refresh = memo(
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
        <path d="M27 3a1 1 0 011 1v6a1 1 0 01-.883.993L27 11h-6a1 1 0 010-2l3.486-.001A10.981 10.981 0 0016 5C9.925 5 5 9.925 5 16s4.925 11 11 11 11-4.925 11-11a1 1 0 012 0c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3a12.98 12.98 0 0110.001 4.693L26 4a1 1 0 011-1z" />
      </svg>
    ),
  ),
);
Refresh.displayName = 'Refresh';
Refresh['iconName'] = 'refresh';
export default Refresh;
