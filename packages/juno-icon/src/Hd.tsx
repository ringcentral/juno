import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Hd = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M3.5 7A1.5 1.5 0 0 1 5 8.5L4.999 14H10V8.5A1.5 1.5 0 0 1 11.5 7h1A1.5 1.5 0 0 1 14 8.5v16a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V18H4.999L5 24.5A1.5 1.5 0 0 1 3.5 26h-1A1.5 1.5 0 0 1 1 24.5v-16A1.5 1.5 0 0 1 2.5 7h1zm18.217 0c2.374 0 4.487.607 6.291 1.87 1.828 1.239 2.991 4.57 2.991 7.509 0 2.987-1.163 6.319-2.968 7.654C26.227 25.32 24.066 26 21.716 26h-3.229c-1.424 0-2.489-.79-2.489-2.248V9.366c0-1.457 1.064-2.367 2.489-2.367h3.229zm-.55 4H20v10.984l1.167.016c4.473 0 5.909-2.456 5.909-6 0-3.148-1.437-5-5.909-5z" />
    </svg>
  )),
);
Hd.displayName = 'Hd';
Hd['iconName'] = 'hd';
export default Hd;
