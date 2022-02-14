import React, { forwardRef, memo } from 'react';

const RcBlog = memo(
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
        <path d="M27 1a4 4 0 014 4v22a4 4 0 01-4 4H5a4 4 0 01-4-4V5a4 4 0 014-4h22zm-8 22H8a1 1 0 000 2h11a1 1 0 000-2zm5-6H8a1 1 0 000 2h16a1 1 0 000-2zM23 7H9a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2zm0 2v2H9V9h14z" />
      </svg>
    ),
  ),
);
RcBlog.displayName = 'RcBlog';
RcBlog['iconName'] = 'rc_blog';
export default RcBlog;
