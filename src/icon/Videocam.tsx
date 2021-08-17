import React, { forwardRef, memo } from 'react';

const Videocam = memo(
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
        <path d="M21 6a2 2 0 012 2v16a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h18zm9 3.618a1 1 0 01.993.883l.007.117v10.764a1 1 0 01-1.34.94l-.107-.046-5-2.5a1 1 0 01-.545-.77L24 18.881v-5.764a1 1 0 01.445-.832l.108-.063 5-2.5c.139-.069.292-.106.447-.106z" />
      </svg>
    ),
  ),
);
Videocam.displayName = 'Videocam';
Videocam['iconName'] = 'videocam';
export default Videocam;
