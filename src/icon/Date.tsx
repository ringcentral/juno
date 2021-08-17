import React, { forwardRef, memo } from 'react';

const Date = memo(
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
        <path d="M26 4h-4V3a1 1 0 00-2 0v1h-8V3a1 1 0 00-2 0v1H6a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2zM4 10h24v2H4v-2z" />
      </svg>
    ),
  ),
);
Date.displayName = 'Date';
Date['iconName'] = 'date';
export default Date;
