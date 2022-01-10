import React, { forwardRef, memo } from 'react';

const PoorConnection = memo(
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
          fill="var(--color18, #000)"
          opacity={0.32}
          d="M27 4a2 2 0 012 2v20a2 2 0 01-2 2h-2a2 2 0 01-2-2V6a2 2 0 012-2h2zM17 14a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2V16a2 2 0 012-2h2z"
        />
        <path
          fill="var(--color18, #000)"
          d="M5 20h2a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2z"
        />
      </svg>
    ),
  ),
);
PoorConnection.displayName = 'PoorConnection';
PoorConnection['iconName'] = 'poor-connection';
export default PoorConnection;
