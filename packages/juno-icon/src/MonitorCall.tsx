import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MonitorCall = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M17 24a3 3 0 1 1 0 6h-2a3 3 0 1 1 0-6h2zm1-22a8 8 0 0 1 8 8v1h1a3 3 0 0 1 2.995 2.824L30 14v4a3 3 0 0 1-3 3h-1v3a4 4 0 0 1-4 4h-2v-2.001L22 26a2 2 0 0 0 1.994-1.851L24 24V10a6 6 0 0 0-5.775-5.996L18 4h-4a6 6 0 0 0-5.996 5.775L8 10v11H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1v-1a8 8 0 0 1 8-8h4zm-1 24h-2a1 1 0 0 0-.117 1.993L15 28h2a1 1 0 0 0 .117-1.993L17 26zM6 13H5a1 1 0 0 0-.993.883L4 14v4a1 1 0 0 0 .883.993L5 19h1v-6zm21 0h-1v6h1l.117-.007A1 1 0 0 0 28 18v-4l-.007-.117A1 1 0 0 0 27 13z" />
    </svg>
  )),
);
MonitorCall.displayName = 'MonitorCall';
MonitorCall['iconName'] = 'monitor_call';
export default MonitorCall;
