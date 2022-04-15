import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Assignment = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M25.333 4H19.76C19.2 2.453 17.733 1.333 16 1.333S12.8 2.453 12.24 4H6.667A2.675 2.675 0 0 0 4 6.667v18.667c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667V6.667C28.001 5.2 26.801 4 25.334 4zM16 4c.733 0 1.333.6 1.333 1.333s-.6 1.333-1.333 1.333-1.333-.6-1.333-1.333S15.267 4 16 4zm0 5.333c2.213 0 4 1.787 4 4s-1.787 4-4 4-4-1.787-4-4 1.787-4 4-4zm8 16H8v-1.867c0-2.667 5.333-4.133 8-4.133s8 1.467 8 4.133v1.867z" />
    </svg>
  )),
);
Assignment.displayName = 'Assignment';
Assignment['iconName'] = 'assignment';
export default Assignment;
