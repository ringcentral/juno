import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const NoteBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2c6.627 0 12 5.373 12 12v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10zm0 2H7a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V14c0-5.523-4.477-10-10-10zm2 14a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2h7zm3-6a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2h10z" />
    </svg>
  )),
);
NoteBorder.displayName = 'NoteBorder';
NoteBorder['iconName'] = 'note_border';
export default NoteBorder;
