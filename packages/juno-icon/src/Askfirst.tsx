import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Askfirst = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M25 19a2 2 0 0 1 1.994 1.851L27 21v6a2 2 0 0 1-1.851 1.994L25 29h-1a3 3 0 0 1-2.995-2.824L21 26v-4a3 3 0 0 1 2.824-2.995L24 19h1zM8 19a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h1zm8-17c7.732 0 14 6.268 14 14v7a1 1 0 0 1-2 0v-7c0-6.525-5.209-11.834-11.695-11.996L16 4C9.475 4 4.166 9.209 4.004 15.695L4 16v7a1 1 0 0 1-2 0v-7C2 8.268 8.268 2 16 2z" />
    </svg>
  )),
);
Askfirst.displayName = 'Askfirst';
Askfirst['iconName'] = 'askfirst';
export default Askfirst;
