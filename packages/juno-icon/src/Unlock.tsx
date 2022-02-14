import React, { forwardRef, memo } from 'react';

const Unlock = memo(
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
        <path d="M24 2a6 6 0 016 6v4h-2V8a4 4 0 00-3.8-3.995L24 4a4 4 0 00-3.995 3.8L20 8v6h4a2 2 0 011.994 1.851L26 16v12a2 2 0 01-1.851 1.994L24 30H8a2.001 2.001 0 01-1.995-1.851L6 28V16c0-1.054.816-1.918 1.851-1.995L8 14h10V8a6 6 0 016-6zm-1 14H9a1 1 0 00-.993.883L8 17v10a1 1 0 00.883.993L9 28h14a1 1 0 00.993-.883L24 27V17a1 1 0 00-.883-.993L23 16zm-7 3a1 1 0 011 1v4a1 1 0 01-2 0v-4a1 1 0 011-1z" />
      </svg>
    ),
  ),
);
Unlock.displayName = 'Unlock';
Unlock['iconName'] = 'unlock';
export default Unlock;
