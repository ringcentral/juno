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
      <path d="M22.2 5.6a2 2 0 0 0-2-2H3.8a2 2 0 0 0-2 2V20a2 2 0 0 0 2 2h8.232c.408-5.149 4.715-9.2 9.968-9.2l.2.002V5.6zM30.2 17.075a10 10 0 0 0-7-4.204V9.917a1 1 0 0 1 .445-.832l.108-.063 5-2.5c.139-.069.292-.106.447-.106v.002a1 1 0 0 1 .993.883l.007.117v9.657zM22 26.8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <path d="M22 30.8a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </svg>
  )),
);
CameraFilled.displayName = 'CameraFilled';
CameraFilled['iconName'] = 'camera-filled';
export default CameraFilled;
