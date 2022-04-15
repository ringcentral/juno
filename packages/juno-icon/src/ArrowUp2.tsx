import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ArrowUp2 = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M9.636 18.95a.999.999 0 0 0 1.414 0L16 14l4.95 4.95a.999.999 0 1 0 1.414-1.414l-5.657-5.657a.999.999 0 0 0-1.414 0l-5.657 5.657a.999.999 0 0 0 0 1.414z" />
    </svg>
  )),
);
ArrowUp2.displayName = 'ArrowUp2';
ArrowUp2['iconName'] = 'arrow_up';
export default ArrowUp2;
