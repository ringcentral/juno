import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const StopSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16.001 8C8.824 8 8 8.822 8 16s.824 8 8.001 8c7.086 0 7.984-.858 7.999-7.655v-.689c-.014-6.798-.913-7.655-7.999-7.655z" />
    </svg>
  )),
);
StopSp.displayName = 'StopSp';
StopSp['iconName'] = 'stop_sp';
export default StopSp;
