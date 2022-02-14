import React, { forwardRef, memo } from 'react';

const Unattended = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        ref={svgRef}
        {...props}
      >
        <path d="M24.27 2L16 10.271 7.73 2 2 7.73 10.271 16 2 24.27 7.73 30 16 21.729 24.27 30 30 24.27 21.729 16 30 7.73z" />
      </svg>
    ),
  ),
);
Unattended.displayName = 'Unattended';
Unattended['iconName'] = 'unattended';
export default Unattended;
