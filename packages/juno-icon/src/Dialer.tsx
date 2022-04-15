import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Dialer = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M7 17a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9-8a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM7 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM7 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
  )),
);
Dialer.displayName = 'Dialer';
Dialer['iconName'] = 'dialer';
export default Dialer;
