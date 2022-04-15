import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Blocked = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M6.101 6.101C11.568.634 20.433.634 25.9 6.101s5.467 14.332 0 19.799c-5.467 5.467-14.332 5.467-19.799 0s-5.467-14.332 0-19.799zm19.063 2.15L8.252 25.163c4.715 3.996 11.786 3.77 16.234-.678 4.376-4.376 4.666-11.292.868-16.004l-.19-.23zM7.515 7.515c-4.448 4.448-4.674 11.52-.678 16.235L23.75 6.837c-4.715-3.997-11.787-3.771-16.235.678z" />
    </svg>
  )),
);
Blocked.displayName = 'Blocked';
Blocked['iconName'] = 'blocked';
export default Blocked;
