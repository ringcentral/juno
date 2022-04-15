import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ArrowUp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m16.707 11.707 5.586 5.586A.999.999 0 0 1 21.586 19H10.414a1 1 0 0 1-.707-1.707l5.586-5.586a.999.999 0 0 1 1.414 0z" />
    </svg>
  )),
);
ArrowUp.displayName = 'ArrowUp';
ArrowUp['iconName'] = 'arrow-up';
export default ArrowUp;
