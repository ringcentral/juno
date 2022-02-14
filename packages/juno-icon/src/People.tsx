import React, { forwardRef, memo } from 'react';

const People = memo(
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
        <path d="M16 18c7.067 0 13 4.315 13 10a2 2 0 01-2 2H5a2 2 0 01-2-2c0-5.685 5.933-10 13-10zm0-16a7 7 0 110 14 7 7 0 010-14z" />
      </svg>
    ),
  ),
);
People.displayName = 'People';
People['iconName'] = 'people';
export default People;
