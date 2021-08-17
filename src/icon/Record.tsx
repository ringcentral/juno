import React, { forwardRef, memo } from 'react';

const Record = memo(
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
        <path d="M16 4c6.627 0 12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4zm0 4a8 8 0 100 16 8 8 0 000-16z" />
      </svg>
    ),
  ),
);
Record.displayName = 'Record';
Record['iconName'] = 'record';
export default Record;
