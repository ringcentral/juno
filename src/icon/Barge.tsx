import React, { forwardRef, memo } from 'react';

const Barge = memo(
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
        <path d="M8 21l4 2v3a2 2 0 11-4 0v-5zM24.849 5.225c.099.242.151.5.151.761v16.027a2 2 0 01-2.762 1.849l-13-5.353a2.001 2.001 0 01-1.239-1.849v-5.321c0-.81.489-1.541 1.239-1.849l13-5.353a2 2 0 012.611 1.088zM6 10v8a4 4 0 010-8zm21 1a3 3 0 01.176 5.995L27 17v-6z" />
      </svg>
    ),
  ),
);
Barge.displayName = 'Barge';
Barge['iconName'] = 'barge';
export default Barge;
