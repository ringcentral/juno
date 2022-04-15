import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Start = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 27 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M2.667 5.49h21.02a2.667 2.667 0 0 1 2.667 2.667v21.02a2.667 2.667 0 0 1-2.667 2.667H2.667A2.667 2.667 0 0 1 0 29.177V8.157A2.667 2.667 0 0 1 2.667 5.49zm.666 3.334V28.51h19.686V8.824H3.333z" />
      <path d="M13.176 13.176c.606 0 1.098.492 1.098 1.098v3.294h3.294a1.099 1.099 0 0 1 0 2.196h-3.294v3.294a1.099 1.099 0 0 1-2.196 0v-3.294H8.784a1.099 1.099 0 0 1 0-2.196h3.294v-3.294c0-.606.492-1.098 1.098-1.098zM13.176 0a5.49 5.49 0 0 1 5.49 5.49h-3.294a2.196 2.196 0 1 0-4.392 0H7.686A5.49 5.49 0 0 1 13.176 0z" />
    </svg>
  )),
);
Start.displayName = 'Start';
Start['iconName'] = 'start';
export default Start;
