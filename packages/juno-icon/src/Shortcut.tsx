import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Shortcut = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M22 24a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h12zM17.2 2.9l12.4 9.3A1 1 0 0 1 29 14h-5v7a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-7H3a1 1 0 0 1-.6-1.8l12.4-9.3a2.001 2.001 0 0 1 2.4 0z" />
    </svg>
  )),
);
Shortcut.displayName = 'Shortcut';
Shortcut['iconName'] = 'shortcut';
export default Shortcut;
