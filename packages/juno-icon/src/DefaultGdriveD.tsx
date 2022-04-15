import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const DefaultGdriveD = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#222b42"
        d="M3.556 0h24.889a3.556 3.556 0 0 1 3.556 3.556v24.889a3.556 3.556 0 0 1-3.556 3.556H3.556A3.556 3.556 0 0 1 0 28.445V3.556A3.556 3.556 0 0 1 3.556 0z"
      />
      <path fill="#ffc107" d="M13.333 8.889h5.778l5.778 9.778h-5.778z" />
      <path fill="#1976d2" d="m9.778 24 3.038-5.333h12.073L21.877 24z" />
      <path
        fill="#4caf50"
        d="M7.111 19.015 10.021 24 16 13.926l-2.963-5.037z"
      />
    </svg>
  )),
);
DefaultGdriveD.displayName = 'DefaultGdriveD';
DefaultGdriveD['iconName'] = 'default-gdrive-D';
export default DefaultGdriveD;
