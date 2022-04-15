import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Pin = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M4.302 14.798a1.141 1.141 0 0 1 0-1.613 10.248 10.248 0 0 1 8.724-2.901l5.045-8.715a1.14 1.14 0 0 1 1.793-.234l10.802 10.801a1.141 1.141 0 0 1-.235 1.794l-8.715 5.046a10.246 10.246 0 0 1-2.901 8.723 1.141 1.141 0 0 1-1.613 0l-5.644-5.644-7.256 7.256c-.445.445-2.78 2.058-3.225 1.613s1.167-2.78 1.613-3.225l7.256-7.256-5.644-5.644z" />
    </svg>
  )),
);
Pin.displayName = 'Pin';
Pin['iconName'] = 'pin';
export default Pin;
