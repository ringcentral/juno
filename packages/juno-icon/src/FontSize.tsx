import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const FontSize = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m20.304 4.402.068.106.054.113 9 22a1 1 0 0 1-1.801.862l-.05-.105-2.746-6.713H14.172l-2.745 6.713a1 1 0 0 1-1.194.585l-.111-.038a1 1 0 0 1-.585-1.194l.038-.11 9-22c.306-.748 1.291-.821 1.729-.219zM9.81 12.411l.067.109.053.115 2.089 5.318-1.106 2.654-1.914-4.872-2.266 5.766 3.808-.001-.833 2.001h-3.76L4.43 27.367a1 1 0 0 1-1.185.601l-.111-.036a1 1 0 0 1-.601-1.185l.036-.111 5.5-14c.3-.763 1.303-.838 1.741-.224zM19.5 7.64l-4.511 11.026h9.021L19.5 7.64z" />
    </svg>
  )),
);
FontSize.displayName = 'FontSize';
FontSize['iconName'] = 'font-size';
export default FontSize;
