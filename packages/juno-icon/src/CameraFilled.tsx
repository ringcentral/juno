import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const CameraFilled = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M23 2a7 7 0 0 1 7 7v14a7 7 0 0 1-7 7H9a7 7 0 0 1-7-7V9a7 7 0 0 1 7-7h14zm-7 8.75a5.25 5.25 0 1 0 .001 10.501A5.25 5.25 0 0 0 16 10.75zm7-3.5a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 23 7.25z" />
    </svg>
  )),
);
CameraFilled.displayName = 'CameraFilled';
CameraFilled['iconName'] = 'camera-filled';
export default CameraFilled;
