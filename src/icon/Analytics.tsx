import React, { forwardRef, memo } from 'react';

const Analytics = memo(
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
        <path d="M28 3a2 2 0 012 2v18a2 2 0 01-2 2H17v2h4a1 1 0 010 2H11a1 1 0 010-2h4v-2H4a2 2 0 01-2-2V5a2 2 0 012-2h24zm-17 8a1 1 0 00-.993.883L10 12v6a1 1 0 001.993.117L12 18v-6a1 1 0 00-1-1zm5-2a1 1 0 00-.993.883L15 10v8a1 1 0 001.993.117L17 18v-8a1 1 0 00-1-1zm5 4a1 1 0 00-.993.883L20 14v4a1 1 0 001.993.117L22 18v-4a1 1 0 00-1-1z" />
      </svg>
    ),
  ),
);
Analytics.displayName = 'Analytics';
Analytics['iconName'] = 'analytics';
export default Analytics;
