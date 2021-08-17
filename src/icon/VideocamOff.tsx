import React, { forwardRef, memo } from 'react';

const VideocamOff = memo(
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
        <path d="M29.435 3.979a.999.999 0 010 1.414L5.393 29.435a.999.999 0 11-1.414-1.414L28.021 3.979a.999.999 0 011.414 0zM21 6c.597 0 1.132.261 1.499.675L3.172 26H3a2 2 0 01-2-2V8a2 2 0 012-2h18zm2 5.828V24a2 2 0 01-2 2H8.827L23 11.828zm7-2.21a1 1 0 01.993.883l.007.117v10.764a1 1 0 01-1.34.94l-.107-.046-5-2.5a1 1 0 01-.545-.77L24 18.881v-5.764a1 1 0 01.445-.832l.108-.063 5-2.5c.139-.069.292-.106.447-.106z" />
      </svg>
    ),
  ),
);
VideocamOff.displayName = 'VideocamOff';
VideocamOff['iconName'] = 'videocam-off';
export default VideocamOff;
