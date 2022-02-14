import React, { forwardRef, memo } from 'react';

const Notification = memo(
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
        <path d="M16 2a1 1 0 011 1l.001 1.055A9.001 9.001 0 0125 13v3.264c0 1.34.449 2.642 1.275 3.698l2.195 2.805A2 2 0 0126.895 26l-5.995.001a5.002 5.002 0 01-9.8 0L5.105 26a2 2 0 01-1.575-3.233l2.195-2.805A6 6 0 007 16.264V13a9 9 0 018-8.945V3a1 1 0 011-1zm2.829 24.001h-5.658a3 3 0 005.658 0z" />
      </svg>
    ),
  ),
);
Notification.displayName = 'Notification';
Notification['iconName'] = 'notification';
export default Notification;
