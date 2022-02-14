import React, { forwardRef, memo } from 'react';

const Expand = memo(
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
        <path d="M5 18a1 1 0 011 1l.001 5.586 5.827-5.829a.999.999 0 111.414 1.414L7.415 26H13a1 1 0 010 2H5a1 1 0 01-1-1v-8a1 1 0 011-1zM27 4a1 1 0 011 1v8a1 1 0 01-2 0l-.001-5.586-5.827 5.829a.999.999 0 11-1.414-1.414L24.585 6H19a1 1 0 010-2h8z" />
      </svg>
    ),
  ),
);
Expand.displayName = 'Expand';
Expand['iconName'] = 'expand';
export default Expand;
