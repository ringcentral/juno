import React, { forwardRef, memo } from 'react';

const DefaultVideoD = memo(
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
        <path
          fill="var(--color21, #222b42)"
          d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
        />
        <path
          fill="var(--color37, #356afd)"
          d="M16 7.111c-4.91 0-8.889 3.98-8.889 8.889S11.09 24.889 16 24.889a8.89 8.89 0 000-17.778z"
        />
        <path
          fill="var(--color27, #f1f1f1)"
          d="M19.497 16.771l-4.918 3.394c-.614.424-1.119.155-1.119-.597v-7.136c0-.752.505-1.021 1.119-.597l4.916 3.394c.614.424.615 1.118.002 1.542z"
        />
      </svg>
    ),
  ),
);
DefaultVideoD.displayName = 'DefaultVideoD';
DefaultVideoD['iconName'] = 'default-video-D';
export default DefaultVideoD;
