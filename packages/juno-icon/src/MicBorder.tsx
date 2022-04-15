import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MicBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M24 12a1 1 0 0 1 1 1v3c0 4.632-3.5 8.447-7.999 8.945L17 29a1 1 0 0 1-2 0v-4.055A9 9 0 0 1 7 16v-3a1 1 0 0 1 2 0v3a7 7 0 1 0 14 0v-3a1 1 0 0 1 1-1zM16 2a5 5 0 0 1 5 5v9a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v9a3 3 0 1 0 6 0V7a3 3 0 0 0-3-3z" />
    </svg>
  )),
);
MicBorder.displayName = 'MicBorder';
MicBorder['iconName'] = 'mic_border';
export default MicBorder;
