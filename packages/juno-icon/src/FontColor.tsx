import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const FontColor = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#000"
        d="m16.873 3.511.054.113 7.5 18.5a1 1 0 0 1-1.803.857l-.05-.106-1.976-4.876h-9.195l-1.975 4.876a1.001 1.001 0 0 1-1.192.589l-.111-.038a1.001 1.001 0 0 1-.589-1.192l.038-.111 7.5-18.5c.304-.751 1.294-.824 1.732-.22l.068.107zM16 6.66 12.213 16h7.573L16 6.66z"
      />
      <path fill="#212121" d="M27 25v3H5v-3z" />
    </svg>
  )),
);
FontColor.displayName = 'FontColor';
FontColor['iconName'] = 'font-color';
export default FontColor;
