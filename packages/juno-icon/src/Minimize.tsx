import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Minimize = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M5.333 18v-4h21.333v4z" />
    </svg>
  )),
);
Minimize.displayName = 'Minimize';
Minimize['iconName'] = 'minimize';
export default Minimize;
