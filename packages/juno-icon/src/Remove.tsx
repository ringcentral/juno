import React, { forwardRef, memo } from 'react';

const Remove = memo(
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
        <path d="M25.899 6.101C20.432.634 11.567.634 6.1 6.101S.633 20.433 6.1 25.9c5.467 5.467 14.332 5.467 19.799 0s5.467-14.332 0-19.799zM9 15h14a1 1 0 010 2H9a1 1 0 010-2z" />
      </svg>
    ),
  ),
);
Remove.displayName = 'Remove';
Remove['iconName'] = 'remove';
export default Remove;
