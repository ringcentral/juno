import React, { forwardRef, memo } from 'react';

const DashboardBorder = memo(
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
        <path d="M27 3a2 2 0 012 2v22a2 2 0 01-2 2h-8a2 2 0 01-2-2V5a2 2 0 012-2h8zM13 21a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2h8zM26 5h-6a1 1 0 00-1 1v20a1 1 0 001 1h6a1 1 0 001-1V6a1 1 0 00-1-1zM12 23H6a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1v-2a1 1 0 00-1-1zm1-20a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h8zm-1 2H6a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V6a1 1 0 00-1-1z" />
      </svg>
    ),
  ),
);
DashboardBorder.displayName = 'DashboardBorder';
DashboardBorder['iconName'] = 'dashboard_border';
export default DashboardBorder;
