import React, { forwardRef, memo } from 'react';

const Computer = memo(
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
        <path d="M5 24.005a2.002 2.002 0 01-2-2v-16a2.002 2.002 0 012-2h22a2.002 2.002 0 012 2v16a2.003 2.003 0 01-2 2H5zm0-17v14a1 1 0 001 1h20a1 1 0 001-1v-14a1 1 0 00-1-1H6a1 1 0 00-1 1zm-3 19h28a1 1 0 010 2H2a1 1 0 010-2z" />
      </svg>
    ),
  ),
);
Computer.displayName = 'Computer';
Computer['iconName'] = 'computer';
export default Computer;
