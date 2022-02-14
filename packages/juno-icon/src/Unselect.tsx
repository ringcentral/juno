import React, { forwardRef, memo } from 'react';

const Unselect = memo(
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
        <path d="M27 2a3 3 0 013 3v22a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h22zm0 2.5H5a.5.5 0 00-.492.41L4.5 5v22a.5.5 0 00.41.492L5 27.5h22a.5.5 0 00.492-.41L27.5 27V5a.5.5 0 00-.41-.492L27 4.5z" />
      </svg>
    ),
  ),
);
Unselect.displayName = 'Unselect';
Unselect['iconName'] = 'unselect';
export default Unselect;
