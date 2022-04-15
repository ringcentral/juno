import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ChevronRight = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M22.682 14.939a1.5 1.5 0 0 1 0 2.121L12.075 27.667a1.5 1.5 0 1 1-2.121-2.121L19.5 16 9.954 6.454a1.5 1.5 0 1 1 2.121-2.121L22.682 14.94z" />
    </svg>
  )),
);
ChevronRight.displayName = 'ChevronRight';
ChevronRight['iconName'] = 'chevron_right';
export default ChevronRight;
