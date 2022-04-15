import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Keypad = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M7 22a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM7 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM7 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
  )),
);
Keypad.displayName = 'Keypad';
Keypad['iconName'] = 'keypad';
export default Keypad;
