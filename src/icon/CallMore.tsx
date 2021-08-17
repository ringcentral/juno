import React, { forwardRef, memo } from 'react';

const CallMore = memo(
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
        <path d="M6 13a3 3 0 110 6 3 3 0 010-6zm10 0a3 3 0 110 6 3 3 0 010-6zm10 0a3 3 0 110 6 3 3 0 010-6z" />
      </svg>
    ),
  ),
);
CallMore.displayName = 'CallMore';
CallMore['iconName'] = 'call-more';
export default CallMore;
