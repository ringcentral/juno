import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const StopBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M25 5a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h18zm-1 2H8a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" />
    </svg>
  )),
);
StopBorder.displayName = 'StopBorder';
StopBorder['iconName'] = 'stop_border';
export default StopBorder;
