import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AlignRight = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27 24a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h22zm0-9a1 1 0 0 1 0 2H13a1 1 0 0 1 0-2h14zm0-9a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h22z" />
    </svg>
  )),
);
AlignRight.displayName = 'AlignRight';
AlignRight['iconName'] = 'align-right';
export default AlignRight;
