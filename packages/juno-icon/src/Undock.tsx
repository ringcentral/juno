import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Undock = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M20 10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h16zm-3 5h-6l2.243 2.242-6.536 6.536a.999.999 0 0 0 1.32 1.497l.094-.083 6.536-6.536L17 21v-6zM28 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-4V8H10V4a2 2 0 0 1 2-2h16z" />
    </svg>
  )),
);
Undock.displayName = 'Undock';
Undock['iconName'] = 'undock';
export default Undock;
