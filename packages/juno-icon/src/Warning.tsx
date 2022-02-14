import React, { forwardRef, memo } from 'react';

const Warning = memo(
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
        <path d="M16.999 4.27c.304.176.557.428.733.733l11.537 19.998a2 2 0 01-1.732 3H4.463a2 2 0 01-1.732-2.999L14.268 5.004A2 2 0 0117 4.271zM16 22a1 1 0 100 2 1 1 0 000-2zm0-10a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1z" />
      </svg>
    ),
  ),
);
Warning.displayName = 'Warning';
Warning['iconName'] = 'warning';
export default Warning;
