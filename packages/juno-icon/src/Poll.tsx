import React, { forwardRef, memo } from 'react';

const Poll = memo(
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
        <path d="M25 5a2 2 0 012 2v18a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h18zm-14 8a1 1 0 00-1 1v7a1 1 0 002 0v-7a1 1 0 00-1-1zm5-3a1 1 0 00-1 1v10a1 1 0 002 0V11a1 1 0 00-1-1zm5 5a1 1 0 00-1 1v5a1 1 0 002 0v-5a1 1 0 00-1-1z" />
      </svg>
    ),
  ),
);
Poll.displayName = 'Poll';
Poll['iconName'] = 'poll';
export default Poll;
