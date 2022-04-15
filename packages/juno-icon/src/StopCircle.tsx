import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const StopCircle = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm3 9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6z" />
    </svg>
  )),
);
StopCircle.displayName = 'StopCircle';
StopCircle['iconName'] = 'stop_circle';
export default StopCircle;
