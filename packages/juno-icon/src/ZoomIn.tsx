import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ZoomIn = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 4a1 1 0 0 1 1 1v10h10a1 1 0 0 1 0 2H17v10a1 1 0 0 1-2 0V17H5a1 1 0 0 1 0-2h10V5a1 1 0 0 1 1-1z" />
    </svg>
  )),
);
ZoomIn.displayName = 'ZoomIn';
ZoomIn['iconName'] = 'zoom-in';
export default ZoomIn;
