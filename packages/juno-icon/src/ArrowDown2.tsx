import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ArrowDown2 = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M9.636 13.05a.999.999 0 0 1 1.414 0L16 18l4.95-4.95a.999.999 0 1 1 1.414 1.414l-5.657 5.657a.999.999 0 0 1-1.414 0l-5.657-5.657a.999.999 0 0 1 0-1.414z" />
    </svg>
  )),
);
ArrowDown2.displayName = 'ArrowDown2';
ArrowDown2['iconName'] = 'arrow_down';
export default ArrowDown2;
