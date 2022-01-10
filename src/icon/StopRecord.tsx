import React, { forwardRef, memo } from 'react';

const StopRecord = memo(
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
        <path
          fill="var(--color81, #f44336)"
          d="M26 23.441A2.54 2.54 0 0123.441 26H8.558a2.54 2.54 0 01-2.559-2.559V8.558a2.54 2.54 0 012.559-2.559h14.883A2.54 2.54 0 0126 8.558v14.883z"
        />
      </svg>
    ),
  ),
);
StopRecord.displayName = 'StopRecord';
StopRecord['iconName'] = 'stop-record';
export default StopRecord;
