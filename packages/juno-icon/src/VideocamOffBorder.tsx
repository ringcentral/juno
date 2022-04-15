import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const VideocamOffBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M21 6c.597 0 1.132.261 1.499.675l-1.711 1.709A.998.998 0 0 0 20 8H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h1.172l-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h18zM5.393 29.434a.999.999 0 1 1-1.414-1.414L28.021 3.978a.999.999 0 1 1 1.414 1.414L23 11.827v12.172a2 2 0 0 1-2 2H8.827l2-2H20a1 1 0 0 0 1-1v-9.172L5.393 29.433zM30 9.618a1 1 0 0 1 .993.883l.007.117v10.764a1 1 0 0 1-1.34.94l-.107-.046-5-2.5a1 1 0 0 1-.545-.77L24 18.881v-5.764a1 1 0 0 1 .445-.832l.108-.063 5-2.5c.139-.069.292-.106.447-.106zm-1 2.618-3 1.5v4.528l3 1.5v-7.528z" />
    </svg>
  )),
);
VideocamOffBorder.displayName = 'VideocamOffBorder';
VideocamOffBorder['iconName'] = 'videocam-off_border';
export default VideocamOffBorder;
