import React, { forwardRef, memo } from 'react';

const GoogleSlideD = memo(
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
          fill="var(--color27, #2f291e)"
          d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
        />
        <path
          fill="var(--color32, #f6ad16)"
          d="M16.756 8l5.466 4.962-.024 8.878c0 .607-.204 1.118-.612 1.535s-.909.625-1.503.625h-8.154c-.594 0-1.095-.209-1.503-.625s-.612-.929-.612-1.535l-.035-11.661c0-.607.204-1.118.612-1.535s.909-.625 1.503-.625l4.862-.018z"
        />
        <path
          fill="var(--color24, #f1f1f1)"
          d="M18.667 15.111h-5.333a.889.889 0 00-.889.889v4.444c0 .491.398.889.889.889h5.333a.889.889 0 00.889-.889V16a.889.889 0 00-.889-.889z"
        />
      </svg>
    ),
  ),
);
GoogleSlideD.displayName = 'GoogleSlideD';
GoogleSlideD['iconName'] = 'google-slide-D';
export default GoogleSlideD;
