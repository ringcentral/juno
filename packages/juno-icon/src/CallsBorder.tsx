import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const CallsBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 2C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm0 2a1 1 0 0 1 .993.883L17 7v8.585l3.707 3.708a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083-4-4a1.002 1.002 0 0 1-.284-.576L15 16V7a1 1 0 0 1 1-1z" />
    </svg>
  )),
);
CallsBorder.displayName = 'CallsBorder';
CallsBorder['iconName'] = 'calls_border';
export default CallsBorder;
