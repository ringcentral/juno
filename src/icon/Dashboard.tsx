import React, { forwardRef, memo } from 'react';

const Dashboard = memo(
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
        <path d="M27 3a2 2 0 012 2v22a2 2 0 01-2 2h-8a2 2 0 01-2-2V5a2 2 0 012-2h8zM13 21a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2h8zm0-18a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h8z" />
      </svg>
    ),
  ),
);
Dashboard.displayName = 'Dashboard';
Dashboard['iconName'] = 'dashboard';
export default Dashboard;
