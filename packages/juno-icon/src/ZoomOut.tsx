import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ZoomOut = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28 16a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1z" />
    </svg>
  )),
);
ZoomOut.displayName = 'ZoomOut';
ZoomOut['iconName'] = 'zoom-out';
export default ZoomOut;
