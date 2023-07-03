import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Donedone = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16.04 2C8.33 2 2.08 8.251 2.08 15.962s6.25 13.962 13.96 13.962c7.71 0 13.96-6.251 13.96-13.962S23.75 2 16.04 2zm-5.781 16.048L6.575 14.42a.492.492 0 0 1-.011-.705l1.741-1.74a.506.506 0 0 1 .704-.007l1.679 1.623 6.348-6.285a.508.508 0 0 1 .72-.008l1.789 1.741a.481.481 0 0 1 .006.691l-8.579 8.33a.516.516 0 0 1-.713-.013zm15.323-1.607-8.579 8.329a.515.515 0 0 1-.713-.013l-3.684-3.627a.492.492 0 0 1-.011-.705l1.74-1.74a.507.507 0 0 1 .704-.008l1.679 1.624 6.348-6.285a.508.508 0 0 1 .72-.008l1.789 1.74c.195.19.202.504.007.692z" />
    </svg>
  )),
);
Donedone.displayName = 'Donedone';
Donedone['iconName'] = 'donedone';
export default Donedone;
