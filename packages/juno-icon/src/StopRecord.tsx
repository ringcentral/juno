import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const StopRecord = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#f44336"
        d="M26 23.441A2.54 2.54 0 0 1 23.441 26H8.558a2.54 2.54 0 0 1-2.559-2.559V8.558a2.54 2.54 0 0 1 2.559-2.559h14.883A2.54 2.54 0 0 1 26 8.558v14.883z"
      />
    </svg>
  )),
);
StopRecord.displayName = 'StopRecord';
StopRecord['iconName'] = 'stop-record';
export default StopRecord;
