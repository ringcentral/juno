import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MoreHoriz = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M9 16a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm9.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm9.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    </svg>
  )),
);
MoreHoriz.displayName = 'MoreHoriz';
MoreHoriz['iconName'] = 'more_horiz';
export default MoreHoriz;
