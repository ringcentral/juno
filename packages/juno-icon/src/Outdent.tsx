import React, { forwardRef, memo } from 'react';

const Outdent = memo(
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
        <path d="M27 24a1 1 0 010 2H5a1 1 0 010-2h22zM8.402 12.201c.776-.449 1.535-.132 1.594.805l.004.138v5.748l-.01.206c-.101.872-.907 1.135-1.65.684l-.111-.073-3.737-2.684-.152-.131c-.474-.485-.445-1.297.048-1.762l.105-.088 3.737-2.73.174-.114zM27 15a1 1 0 010 2H13a1 1 0 010-2h14zm0-9a1 1 0 010 2H5a1 1 0 010-2h22z" />
      </svg>
    ),
  ),
);
Outdent.displayName = 'Outdent';
Outdent['iconName'] = 'outdent';
export default Outdent;
