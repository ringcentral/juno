import React, { forwardRef, memo } from 'react';

const Mic = memo(
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
        <path d="M24 12a1 1 0 011 1v3c0 4.632-3.5 8.447-7.999 8.945L17 29a1 1 0 01-2 0v-4.055A9 9 0 017 16v-3a1 1 0 012 0v3a7 7 0 1014 0v-3a1 1 0 011-1zM16 2a5 5 0 015 5v9a5 5 0 01-10 0V7a5 5 0 015-5z" />
      </svg>
    ),
  ),
);
Mic.displayName = 'Mic';
Mic['iconName'] = 'mic';
export default Mic;
