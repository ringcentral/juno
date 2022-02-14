import React, { forwardRef, memo } from 'react';

const Join = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        viewBox="0 0 27 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        {...props}
      >
        <path d="M2.667 5.49h21.02a2.667 2.667 0 012.667 2.667v21.02a2.667 2.667 0 01-2.667 2.667H2.667A2.667 2.667 0 010 29.177V8.157A2.667 2.667 0 012.667 5.49zm.666 3.334V28.51h19.686V8.824H3.333zM13.176 0a5.49 5.49 0 015.49 5.49h-3.294a2.196 2.196 0 10-4.392 0H7.686A5.49 5.49 0 0113.176 0z" />
        <path d="M14.274 19.765a5.49 5.49 0 015.49 5.49h-2.196a3.294 3.294 0 00-3.294-3.294h-2.196a3.294 3.294 0 00-3.294 3.294H6.588l.007-.274a5.49 5.49 0 015.483-5.216zm-1.098-8.785a3.294 3.294 0 110 6.589 3.294 3.294 0 010-6.589zm0 2.196a1.099 1.099 0 10.001 2.197 1.099 1.099 0 00-.001-2.197z" />
      </svg>
    ),
  ),
);
Join.displayName = 'Join';
Join['iconName'] = 'join';
export default Join;
