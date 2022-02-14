import React, { forwardRef, memo } from 'react';

const Close = memo(
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
        <path d="M25.899 7.515L17.414 16l8.485 8.486a1 1 0 01-1.414 1.414L16 17.413 7.515 25.9a1 1 0 01-1.414-1.414l8.485-8.487-8.485-8.484a.999.999 0 111.414-1.414l8.486 8.485 8.485-8.485A.999.999 0 1125.9 7.515z" />
      </svg>
    ),
  ),
);
Close.displayName = 'Close';
Close['iconName'] = 'close';
export default Close;
