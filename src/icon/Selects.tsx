import React, { forwardRef, memo } from 'react';

const Selects = memo(
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
        <path d="M27 2a3 3 0 013 3v22a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h22zm-4.593 8.375l-8.201 7.993-3.433-3.412a1.334 1.334 0 00-1.878 1.894l4.36 4.331a1.333 1.333 0 001.865.012l9.14-8.9a1.332 1.332 0 10-1.853-1.917z" />
      </svg>
    ),
  ),
);
Selects.displayName = 'Selects';
Selects['iconName'] = 'selects';
export default Selects;
