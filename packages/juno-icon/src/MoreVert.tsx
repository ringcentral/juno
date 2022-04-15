import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MoreVert = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 23a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0-9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM16 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
    </svg>
  )),
);
MoreVert.displayName = 'MoreVert';
MoreVert['iconName'] = 'more_vert';
export default MoreVert;
