import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const RcBlog = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27 1a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h22zm-8 22H8a1 1 0 0 0 0 2h11a1 1 0 0 0 0-2zm5-6H8a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM23 7H9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2v2H9V9h14z" />
    </svg>
  )),
);
RcBlog.displayName = 'RcBlog';
RcBlog['iconName'] = 'rc_blog';
export default RcBlog;
