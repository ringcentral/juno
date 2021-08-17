import React, { forwardRef, memo } from 'react';

const ListView = memo(
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
        <path d="M26.667 22.667a1.333 1.333 0 010 2.666H5.334a1.333 1.333 0 010-2.666h21.333zm0-8a1.333 1.333 0 010 2.666H5.334a1.333 1.333 0 010-2.666h21.333zm0-8a1.333 1.333 0 010 2.666H5.334a1.333 1.333 0 010-2.666h21.333z" />
      </svg>
    ),
  ),
);
ListView.displayName = 'ListView';
ListView['iconName'] = 'list-view';
export default ListView;
