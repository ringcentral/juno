import React, { forwardRef, memo } from 'react';

const Copy = memo(
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
        <path d="M27 28H10a1 1 0 01-1-1V10a1 1 0 011-1h17a1 1 0 011 1v17a1 1 0 01-1 1zm1-21H9a2 2 0 00-2 2v19a2 2 0 002 2h19a2 2 0 002-2V9a2 2 0 00-2-2zM3 18a1 1 0 01-1-1V4a2 2 0 012-2h13a1 1 0 010 2H5a1 1 0 00-1 1v12a1 1 0 01-1 1z" />
      </svg>
    ),
  ),
);
Copy.displayName = 'Copy';
Copy['iconName'] = 'copy';
export default Copy;
