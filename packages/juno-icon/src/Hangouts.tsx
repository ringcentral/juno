import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Hangouts = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m20.739 14.293-1.354 2.732h-2.031l1.354-2.732h-2.032v-4.098h4.062v4.098zm-5.416 0-1.354 2.732h-2.031l1.354-2.732h-2.031v-4.098h4.062v4.098zM16 2C9.636 2 4.491 7.19 4.491 13.61S9.636 25.22 16 25.22h.677v4.781c6.634-3.142 10.832-10.244 10.832-16.39 0-6.42-5.146-11.61-11.509-11.61z" />
    </svg>
  )),
);
Hangouts.displayName = 'Hangouts';
Hangouts['iconName'] = 'hangouts';
export default Hangouts;
