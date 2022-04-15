import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Dashboard = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27 3a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8zM13 21a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8zm0-18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8z" />
    </svg>
  )),
);
Dashboard.displayName = 'Dashboard';
Dashboard['iconName'] = 'dashboard';
export default Dashboard;
