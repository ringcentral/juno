import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const DialerS = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 24.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM7.5 17a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm8.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm8.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-17-7.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm8.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm8.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM7.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM16 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm8.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
    </svg>
  )),
);
DialerS.displayName = 'DialerS';
DialerS['iconName'] = 'dialer_s';
export default DialerS;
