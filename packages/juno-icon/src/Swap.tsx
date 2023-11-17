import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Swap = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M14.6 10.5c0-3.038 2.507-5.5 5.6-5.5s5.6 2.462 5.6 5.5v11H30L24.4 27l-5.6-5.5H23v-11c0-1.519-1.254-2.75-2.8-2.75s-2.8 1.231-2.8 2.75v11c0 3.038-2.507 5.5-5.6 5.5s-5.6-2.462-5.6-5.5v-11H2L7.6 5l5.6 5.5H9v11c0 1.519 1.254 2.75 2.8 2.75s2.8-1.231 2.8-2.75v-11z" />
    </svg>
  )),
);
Swap.displayName = 'Swap';
Swap['iconName'] = 'swap';
export default Swap;
