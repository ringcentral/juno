import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ArrowRight = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M13.05 9.636a.999.999 0 0 0 0 1.414L18 16l-4.95 4.95a.999.999 0 1 0 1.414 1.414l5.657-5.657a.999.999 0 0 0 0-1.414l-5.657-5.657a.999.999 0 0 0-1.414 0z" />
    </svg>
  )),
);
ArrowRight.displayName = 'ArrowRight';
ArrowRight['iconName'] = 'arrow_right';
export default ArrowRight;
