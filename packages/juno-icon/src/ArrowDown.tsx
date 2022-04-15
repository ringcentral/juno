import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ArrowDown = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m16.707 20.293 5.586-5.586A.999.999 0 0 0 21.586 13H10.414a1 1 0 0 0-.707 1.707l5.586 5.586a.999.999 0 0 0 1.414 0z" />
    </svg>
  )),
);
ArrowDown.displayName = 'ArrowDown';
ArrowDown['iconName'] = 'arrow-down';
export default ArrowDown;
