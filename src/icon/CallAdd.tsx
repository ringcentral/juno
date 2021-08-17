import React, { forwardRef, memo } from 'react';

const CallAdd = memo(
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
        <path d="M16 4a2 2 0 012 2v8h8a2 2 0 110 4h-8v8a2 2 0 11-4 0v-8H6a2 2 0 110-4h8V6a2 2 0 012-2z" />
      </svg>
    ),
  ),
);
CallAdd.displayName = 'CallAdd';
CallAdd['iconName'] = 'call-add';
export default CallAdd;
