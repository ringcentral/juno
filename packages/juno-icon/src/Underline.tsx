import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Underline = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M24 26a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h16zm0-22a1 1 0 0 1 1 1v10c0 4.971-4.029 9-9 9s-9-4.029-9-9V5a1 1 0 0 1 2 0v10a7 7 0 0 0 6.759 6.996L16 22a7 7 0 0 0 6.996-6.759L23 15V5a1 1 0 0 1 1-1z" />
    </svg>
  )),
);
Underline.displayName = 'Underline';
Underline['iconName'] = 'underline';
export default Underline;
