import React, { forwardRef, memo } from 'react';

const Add = memo(
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
        <path d="M25.899 6.101c5.467 5.467 5.467 14.332 0 19.799s-14.332 5.467-19.799 0C.633 20.433.633 11.568 6.1 6.101s14.332-5.467 19.799 0zm-8.898 8.898L17 9a1 1 0 00-1.993-.117L15 9l.001 5.999L9 15a1 1 0 00-.117 1.993L9 17l6.001-.001L15 23a1 1 0 001.993.117L17 23l.001-6.001L23 17a1 1 0 00.117-1.993L23 15l-5.999-.001z" />
      </svg>
    ),
  ),
);
Add.displayName = 'Add';
Add['iconName'] = 'add';
export default Add;
