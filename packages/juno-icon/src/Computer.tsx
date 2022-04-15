import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Computer = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M5 24.005a2.002 2.002 0 0 1-2-2v-16a2.002 2.002 0 0 1 2-2h22a2.002 2.002 0 0 1 2 2v16a2.003 2.003 0 0 1-2 2H5zm0-17v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1zm-3 19h28a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z" />
    </svg>
  )),
);
Computer.displayName = 'Computer';
Computer['iconName'] = 'computer';
export default Computer;
