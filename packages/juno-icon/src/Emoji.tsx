import React, { forwardRef, memo } from 'react';

const Emoji = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        {...props}
      >
        <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 2C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm4.328 14.505a1 1 0 111.73 1.004A6.997 6.997 0 0116 23a6.996 6.996 0 01-6.031-3.445 1 1 0 111.723-1.017A4.997 4.997 0 0016.001 21a4.995 4.995 0 004.328-2.495zM11 10a2 2 0 11.001 3.999A2 2 0 0111 10zm10 0a2 2 0 11.001 3.999A2 2 0 0121 10z" />
      </svg>
    ),
  ),
);
Emoji.displayName = 'Emoji';
Emoji['iconName'] = 'emoji';
export default Emoji;
