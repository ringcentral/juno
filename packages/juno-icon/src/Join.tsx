import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Join = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 27 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M2.667 5.49h21.02a2.667 2.667 0 0 1 2.667 2.667v21.02a2.667 2.667 0 0 1-2.667 2.667H2.667A2.667 2.667 0 0 1 0 29.177V8.157A2.667 2.667 0 0 1 2.667 5.49zm.666 3.334V28.51h19.686V8.824H3.333zM13.176 0a5.49 5.49 0 0 1 5.49 5.49h-3.294a2.196 2.196 0 1 0-4.392 0H7.686A5.49 5.49 0 0 1 13.176 0z" />
      <path d="M14.274 19.765a5.49 5.49 0 0 1 5.49 5.49h-2.196a3.294 3.294 0 0 0-3.294-3.294h-2.196a3.294 3.294 0 0 0-3.294 3.294H6.588l.007-.274a5.49 5.49 0 0 1 5.483-5.216zm-1.098-8.785a3.294 3.294 0 1 1 0 6.589 3.294 3.294 0 0 1 0-6.589zm0 2.196a1.099 1.099 0 1 0 .001 2.197 1.099 1.099 0 0 0-.001-2.197z" />
    </svg>
  )),
);
Join.displayName = 'Join';
Join['iconName'] = 'join';
export default Join;
