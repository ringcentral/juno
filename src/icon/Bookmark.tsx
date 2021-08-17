import React, { forwardRef, memo } from 'react';

const Bookmark = memo(
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
        <path d="M25 3a2 2 0 012 2v23.178a1 1 0 01-1.537.844l-8.926-5.68a1.002 1.002 0 00-1.074 0l-8.926 5.68A1.001 1.001 0 015 28.178V5a2 2 0 012-2h18z" />
      </svg>
    ),
  ),
);
Bookmark.displayName = 'Bookmark';
Bookmark['iconName'] = 'bookmark';
export default Bookmark;
