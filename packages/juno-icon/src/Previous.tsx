import React, { forwardRef, memo } from 'react';

const Previous = memo(
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
        <path d="M14.899 6.101a.999.999 0 010 1.414L7.413 15h19.586a1 1 0 010 2H7.411l7.488 7.486a.999.999 0 11-1.414 1.414l-9.192-9.192a.999.999 0 010-1.414l9.192-9.192a.999.999 0 011.414 0z" />
      </svg>
    ),
  ),
);
Previous.displayName = 'Previous';
Previous['iconName'] = 'previous';
export default Previous;
