import React, { forwardRef, memo } from 'react';

const Default = memo(
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
        <circle cx="16" cy="16" r="16" />
      </svg>
    ),
  ),
);
Default.displayName = 'Default';
Default['iconName'] = 'default';
export default Default;
