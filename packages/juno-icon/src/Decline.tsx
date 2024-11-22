import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Decline = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 34 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M5.486 4.686a2 2 0 0 0 0 2.828l8.485 8.485-8.485 8.485a2 2 0 1 0 2.828 2.828l8.485-8.485 8.485 8.485a2 2 0 1 0 2.828-2.828l-8.485-8.485 8.485-8.485a2 2 0 1 0-2.828-2.828l-8.485 8.485-8.485-8.485a2 2 0 0 0-2.828 0z" />
    </svg>
  )),
);
Decline.displayName = 'Decline';
Decline['iconName'] = 'Decline';
export default Decline;
