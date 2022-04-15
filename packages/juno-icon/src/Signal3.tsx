import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Signal3 = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M10.667 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM20 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM29.333 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
    </svg>
  )),
);
Signal3.displayName = 'Signal3';
Signal3['iconName'] = 'signal-3';
export default Signal3;
