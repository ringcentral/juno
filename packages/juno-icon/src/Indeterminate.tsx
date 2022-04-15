import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Indeterminate = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27 2a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h22zm-3.333 12.667H8.334a1.333 1.333 0 0 0-.128 2.66l.128.006h15.333a1.333 1.333 0 0 0 .128-2.66l-.128-.006z" />
    </svg>
  )),
);
Indeterminate.displayName = 'Indeterminate';
Indeterminate['iconName'] = 'indeterminate';
export default Indeterminate;
