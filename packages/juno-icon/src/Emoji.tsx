import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Emoji = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 2C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm4.328 14.505a1 1 0 1 1 1.73 1.004A6.997 6.997 0 0 1 16 23a6.996 6.996 0 0 1-6.031-3.445 1 1 0 1 1 1.723-1.017A4.997 4.997 0 0 0 16.001 21a4.995 4.995 0 0 0 4.328-2.495zM11 10a2 2 0 1 1 .001 3.999A2 2 0 0 1 11 10zm10 0a2 2 0 1 1 .001 3.999A2 2 0 0 1 21 10z" />
    </svg>
  )),
);
Emoji.displayName = 'Emoji';
Emoji['iconName'] = 'emoji';
export default Emoji;
