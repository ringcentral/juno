import React, { forwardRef, memo } from 'react';

const Askfirst = memo(
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
        <path d="M25 19a2 2 0 011.994 1.851L27 21v6a2 2 0 01-1.851 1.994L25 29h-1a3 3 0 01-2.995-2.824L21 26v-4a3 3 0 012.824-2.995L24 19h1zM8 19a3 3 0 013 3v4a3 3 0 01-3 3H7a2 2 0 01-2-2v-6a2 2 0 012-2h1zm8-17c7.732 0 14 6.268 14 14v7a1 1 0 01-2 0v-7c0-6.525-5.209-11.834-11.695-11.996L16 4C9.475 4 4.166 9.209 4.004 15.695L4 16v7a1 1 0 01-2 0v-7C2 8.268 8.268 2 16 2z" />
      </svg>
    ),
  ),
);
Askfirst.displayName = 'Askfirst';
Askfirst['iconName'] = 'askfirst';
export default Askfirst;
