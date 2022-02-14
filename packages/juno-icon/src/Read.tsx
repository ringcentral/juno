import React, { forwardRef, memo } from 'react';

const Read = memo(
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
        <path d="M25.615 2a2 2 0 011.752 2.965L24 11.08l3.331 5.943a2 2 0 01-1.745 2.978H6v9a1 1 0 01-2 0v-26a1 1 0 011-1h20.615zm-.001 2H6v14h19.586l-3.331-5.943a2 2 0 01-.084-1.789l.076-.154 3.366-6.115z" />
      </svg>
    ),
  ),
);
Read.displayName = 'Read';
Read['iconName'] = 'read';
export default Read;
