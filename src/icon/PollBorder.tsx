import React, { forwardRef, memo } from 'react';

const PollBorder = memo(
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
        <path d="M25 5a2 2 0 012 2v18a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h18zm-1 2H8a1 1 0 00-.993.883L7 8v16a1 1 0 00.883.993L8 25h16a1 1 0 00.993-.883L25 24V8a1 1 0 00-1-1zm-13 6a1 1 0 011 1v7a1 1 0 01-2 0v-7a1 1 0 011-1zm5-3a1 1 0 011 1v10a1 1 0 01-2 0V11a1 1 0 011-1zm5 5a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1z" />
      </svg>
    ),
  ),
);
PollBorder.displayName = 'PollBorder';
PollBorder['iconName'] = 'poll_border';
export default PollBorder;
