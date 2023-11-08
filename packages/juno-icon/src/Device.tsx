import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Device = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M5 4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h13a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H14.829A3.001 3.001 0 0 1 12 31H8a3.001 3.001 0 0 1-2.829-2H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1V4zm0 3H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h1V7zm10 20h13a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H15v20zM8 3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8zm9 8a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1zm3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1z" />
    </svg>
  )),
);
Device.displayName = 'Device';
Device['iconName'] = 'device';
export default Device;
