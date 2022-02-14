import React, { forwardRef, memo } from 'react';

const BookmarkBorder = memo(
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
        <path d="M25 3a2 2 0 012 2v23.178a1 1 0 01-1.537.844l-8.926-5.68a1.002 1.002 0 00-1.074 0l-8.926 5.68A1.001 1.001 0 015 28.178V5a2 2 0 012-2h18zm-1 2H8a1 1 0 00-1 1v20.357l7.926-5.044a2 2 0 012.148 0L25 26.357V6a1 1 0 00-1-1z" />
      </svg>
    ),
  ),
);
BookmarkBorder.displayName = 'BookmarkBorder';
BookmarkBorder['iconName'] = 'bookmark_border';
export default BookmarkBorder;
