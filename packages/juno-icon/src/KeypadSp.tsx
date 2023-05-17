import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const KeypadSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M8.857 20.571a2.57 2.57 0 1 1 0 5.142 2.57 2.57 0 0 1 0-5.142zm7.143 0a2.57 2.57 0 1 1 0 5.142 2.57 2.57 0 0 1 0-5.142zm7.143 0a2.57 2.57 0 1 1 0 5.142 2.57 2.57 0 0 1 0-5.142zM8.857 13.429a2.57 2.57 0 1 1 0 5.142 2.57 2.57 0 0 1 0-5.142zm7.143 0a2.57 2.57 0 1 1 0 5.142 2.57 2.57 0 0 1 0-5.142zm7.143 0a2.57 2.57 0 1 1 0 5.142 2.57 2.57 0 0 1 0-5.142zM8.857 6.286a2.57 2.57 0 1 1 0 5.142 2.57 2.57 0 0 1 0-5.142zm7.143 0a2.57 2.57 0 1 1 0 5.142 2.57 2.57 0 0 1 0-5.142zm7.143 0a2.57 2.57 0 1 1 0 5.142 2.57 2.57 0 0 1 0-5.142z" />
    </svg>
  )),
);
KeypadSp.displayName = 'KeypadSp';
KeypadSp['iconName'] = 'keypad_sp';
export default KeypadSp;
