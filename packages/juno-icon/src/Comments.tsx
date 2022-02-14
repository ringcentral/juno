import React, { forwardRef, memo } from 'react';

const Comments = memo(
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
        <path d="M28 4a2 2 0 012 2v16a2 2 0 01-2 2h-7.586a.997.997 0 00-.707.293l-3.141 3.141a.8.8 0 01-1.131 0l-3.141-3.141a1 1 0 00-.707-.293H4.001a2 2 0 01-2-2V6a2 2 0 012-2h24zm-1 2H5a1 1 0 00-1 1v14a1 1 0 001 1h7a2 2 0 011.414.586L16 25.172l2.586-2.586A2 2 0 0120 22h7a1 1 0 001-1V7a1 1 0 00-1-1zM9 12a2 2 0 11.001 3.999A2 2 0 019 12zm7 0a2 2 0 11.001 3.999A2 2 0 0116 12zm7 0a2 2 0 11.001 3.999A2 2 0 0123 12z" />
      </svg>
    ),
  ),
);
Comments.displayName = 'Comments';
Comments['iconName'] = 'comments';
export default Comments;
