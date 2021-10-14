import React, { forwardRef, memo } from 'react';

const RcvVideocamOff = memo(
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
        <path
          fill="var(--color13, #6a7186)"
          d="M21 5.5c.597 0 1.132.261 1.499.675L3.172 25.5H3a2 2 0 01-2-2v-16a2 2 0 012-2h18zm2 5.828V23.5a2 2 0 01-2 2H8.827L23 11.328zm7-2.21a1 1 0 01.993.883l.007.117v10.764a1 1 0 01-1.34.94l-.107-.046-5-2.5a1 1 0 01-.545-.77L24 18.381v-5.764a1 1 0 01.445-.832l.108-.063 5-2.5c.139-.069.292-.106.447-.106z"
        />
        <path
          fill="var(--color14, #f54c3d)"
          d="M29.435 3.479a.999.999 0 010 1.414L5.393 28.935a.999.999 0 11-1.414-1.414L28.021 3.479a.999.999 0 011.414 0z"
        />
      </svg>
    ),
  ),
);
RcvVideocamOff.displayName = 'RcvVideocamOff';
RcvVideocamOff['iconName'] = 'rcv_videocam-off';
export default RcvVideocamOff;
