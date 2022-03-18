import React, { forwardRef, memo } from 'react';

const RecordBorder = memo(
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
        <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 2C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm0 4a8 8 0 110 16 8 8 0 010-16z" />
      </svg>
    ),
  ),
);
RecordBorder.displayName = 'RecordBorder';
RecordBorder['iconName'] = 'record_border';
export default RecordBorder;
