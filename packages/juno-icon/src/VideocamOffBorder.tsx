import React, { forwardRef, memo } from 'react';

const VideocamOffBorder = memo(
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
        <path d="M21 6c.597 0 1.132.261 1.499.675l-1.711 1.709A.998.998 0 0020 8H4a1 1 0 00-1 1v14a1 1 0 001 1h1.172l-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h18zM5.393 29.434a.999.999 0 11-1.414-1.414L28.021 3.978a.999.999 0 111.414 1.414L23 11.827v12.172a2 2 0 01-2 2H8.827l2-2H20a1 1 0 001-1v-9.172L5.393 29.433zM30 9.618a1 1 0 01.993.883l.007.117v10.764a1 1 0 01-1.34.94l-.107-.046-5-2.5a1 1 0 01-.545-.77L24 18.881v-5.764a1 1 0 01.445-.832l.108-.063 5-2.5c.139-.069.292-.106.447-.106zm-1 2.618l-3 1.5v4.528l3 1.5v-7.528z" />
      </svg>
    ),
  ),
);
VideocamOffBorder.displayName = 'VideocamOffBorder';
VideocamOffBorder['iconName'] = 'videocam-off_border';
export default VideocamOffBorder;
