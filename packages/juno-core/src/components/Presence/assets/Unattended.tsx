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
        <path d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm7.54,20.39a2.23,2.23,0,0,1-3.15,3.15h0L16,19.15l-4.39,4.39a2.23,2.23,0,0,1-3.15-3.15h0L12.85,16,8.46,11.61a2.23,2.23,0,0,1,3.15-3.15L16,12.85l4.39-4.39a2.23,2.23,0,0,1,3.15,3.15h0L19.15,16Z" />
      </svg>
    ),
  ),
);
Unattended.displayName = 'Unattended';
Unattended['iconName'] = 'unattended';
export default Unattended;
