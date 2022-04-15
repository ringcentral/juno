import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const BookmarkBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M25 3a2 2 0 0 1 2 2v23.178a1 1 0 0 1-1.537.844l-8.926-5.68a1.002 1.002 0 0 0-1.074 0l-8.926 5.68A1.001 1.001 0 0 1 5 28.178V5a2 2 0 0 1 2-2h18zm-1 2H8a1 1 0 0 0-1 1v20.357l7.926-5.044a2 2 0 0 1 2.148 0L25 26.357V6a1 1 0 0 0-1-1z" />
    </svg>
  )),
);
BookmarkBorder.displayName = 'BookmarkBorder';
BookmarkBorder['iconName'] = 'bookmark_border';
export default BookmarkBorder;
