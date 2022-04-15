import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Previous = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M14.899 6.101a.999.999 0 0 1 0 1.414L7.413 15h19.586a1 1 0 0 1 0 2H7.411l7.488 7.486a.999.999 0 1 1-1.414 1.414l-9.192-9.192a.999.999 0 0 1 0-1.414l9.192-9.192a.999.999 0 0 1 1.414 0z" />
    </svg>
  )),
);
Previous.displayName = 'Previous';
Previous['iconName'] = 'previous';
export default Previous;
