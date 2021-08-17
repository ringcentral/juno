import React, { forwardRef, memo } from 'react';

const Conference = memo(
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
        <path d="M28.758 21.902a3 3 0 11-3 5.196 3 3 0 113-5.196zM7.34 23a3 3 0 11-5.196 3 3 3 0 015.196-3zM16 10a8 8 0 110 16 8 8 0 010-16zm0-8a3 3 0 110 6 3 3 0 010-6z" />
      </svg>
    ),
  ),
);
Conference.displayName = 'Conference';
Conference['iconName'] = 'conference';
export default Conference;
