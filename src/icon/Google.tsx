import React, { forwardRef, memo } from 'react';

const Google = memo(
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
        <path d="M2.667 20.421L6.864 28l8.148-14.527-4.321-7.579-8.025 14.527zm10.494 0L8.964 28h16.173l4.197-7.579H13.161zM20.197 4h-8.395l8.518 15.158h8.395L20.197 4z" />
      </svg>
    ),
  ),
);
Google.displayName = 'Google';
Google['iconName'] = 'google';
export default Google;
