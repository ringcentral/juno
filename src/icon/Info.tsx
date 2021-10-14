import React, { forwardRef, memo } from 'react';

const Info = memo(
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
        <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 11a1 1 0 00-1 1v10a1 1 0 002 0V14a1 1 0 00-1-1zm0-6a2 2 0 10-.001 3.999A2 2 0 0016 7z" />
      </svg>
    ),
  ),
);
Info.displayName = 'Info';
Info['iconName'] = 'info';
export default Info;
