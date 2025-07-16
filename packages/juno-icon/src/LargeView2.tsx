import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const LargeView2 = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M7.596 8.5a2.502 2.502 0 1 1 0 5.004 2.503 2.503 0 0 1 0-5.006z" />
      <path d="M27.82 1.82A3.78 3.78 0 0 1 31.6 5.6v20.8a3.784 3.784 0 0 1-3.78 3.782l-24.024-.02A3.788 3.788 0 0 1 .4 26.4V5.6a3.78 3.78 0 0 1 3.78-3.78h23.64zM4.18 4.22A1.38 1.38 0 0 0 2.8 5.6v20.8c0 .762.62 1.382 1.38 1.382h8.22V4.22H4.18zM14.8 27.78h13.02c.76 0 1.38-.62 1.38-1.382V5.6c0-.762-.62-1.38-1.38-1.38H14.8v23.56z" />
    </svg>
  )),
);
LargeView2.displayName = 'LargeView2';
LargeView2['iconName'] = 'LargeView2';
export default LargeView2;
