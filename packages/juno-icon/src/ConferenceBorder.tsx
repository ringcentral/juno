import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ConferenceBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28.758 21.902a3 3 0 1 1-3 5.196 3 3 0 1 1 3-5.196zM7.34 23a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3zM16 10a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm10.392 14a1 1 0 1 0 1.733 1 1 1 0 0 0-1.733-1zm-22.15-.366a1 1 0 1 0 1.001 1.732 1 1 0 0 0-1.001-1.732zM16 12a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0-10a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  )),
);
ConferenceBorder.displayName = 'ConferenceBorder';
ConferenceBorder['iconName'] = 'conference_border';
export default ConferenceBorder;
