import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const JumpTo = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m23.879 9.464 5.657 5.657.083.094a.998.998 0 0 1 .065 1.514l-.096.082-5.666 5.666a.999.999 0 1 1-1.414-1.414l4.063-4.064H3.001a1 1 0 0 1 0-2h23.586l-4.122-4.121a.999.999 0 1 1 1.414-1.414z" />
    </svg>
  )),
);
JumpTo.displayName = 'JumpTo';
JumpTo['iconName'] = 'Jump-to';
export default JumpTo;
