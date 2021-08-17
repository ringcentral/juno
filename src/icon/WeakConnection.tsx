import React, { forwardRef, memo } from 'react';

const WeakConnection = memo(
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
          fill="var(--color11, #000)"
          opacity={0.32}
          d="M25 4h2a2 2 0 012 2v20a2 2 0 01-2 2h-2a2 2 0 01-2-2V6a2 2 0 012-2z"
        />
        <path
          fill="var(--color11, #000)"
          d="M17 14a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2V16a2 2 0 012-2h2zM7 20a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2h2z"
        />
      </svg>
    ),
  ),
);
WeakConnection.displayName = 'WeakConnection';
WeakConnection['iconName'] = 'weak-connection';
export default WeakConnection;
