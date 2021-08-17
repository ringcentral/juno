import React, { forwardRef, memo } from 'react';

const Team = memo(
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
        <path d="M8 19c-4.346 0-8 3.045-8 7a2 2 0 002 2l6.536.001A3.98 3.98 0 018 26c0-2.541.969-4.815 2.582-6.627A9.02 9.02 0 008 19zm13-2c-5.981 0-11 3.904-11 9a2 2 0 002 2h18a2 2 0 002-2c0-5.096-5.019-9-11-9zM8 7a5 5 0 10.001 10.001A5 5 0 008 7zm13-4a6 6 0 100 12 6 6 0 000-12z" />
      </svg>
    ),
  ),
);
Team.displayName = 'Team';
Team['iconName'] = 'team';
export default Team;
