import React, { forwardRef, memo } from 'react';

const Keypad = memo(
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
        <path d="M7 22a3 3 0 110 6 3 3 0 010-6zm9 0a3 3 0 110 6 3 3 0 010-6zm9 0a3 3 0 110 6 3 3 0 010-6zM7 13a3 3 0 110 6 3 3 0 010-6zm9 0a3 3 0 110 6 3 3 0 010-6zm9 0a3 3 0 110 6 3 3 0 010-6zM7 4a3 3 0 110 6 3 3 0 010-6zm9 0a3 3 0 110 6 3 3 0 010-6zm9 0a3 3 0 110 6 3 3 0 010-6z" />
      </svg>
    ),
  ),
);
Keypad.displayName = 'Keypad';
Keypad['iconName'] = 'keypad';
export default Keypad;
