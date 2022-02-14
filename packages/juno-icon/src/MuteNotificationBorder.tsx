import React, { forwardRef, memo } from 'react';

const MuteNotificationBorder = memo(
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
        <path d="M24.574 10.255c.277.865.426 1.787.426 2.745v3.264c0 1.34.449 2.642 1.275 3.698l2.195 2.805A2 2 0 0126.895 26l-5.995.001a5.002 5.002 0 01-9.8 0H8.827L10.828 24h16.066l-2.195-2.805a8.001 8.001 0 01-1.7-4.93v-3.264c0-.369-.029-.732-.084-1.086l1.658-1.659zm4.861-6.276a.999.999 0 010 1.414L5.393 29.435a.999.999 0 11-1.414-1.414L28.021 3.979a.999.999 0 011.414 0zM18.829 26.001h-5.658a3 3 0 005.658 0zM16 2a1 1 0 011 1l.001 1.055a8.975 8.975 0 015.449 2.668l-1.414 1.415A7 7 0 009 13v3.264a7.995 7.995 0 01-1.7 4.93l-2.195 2.805h.067l-1.447 1.448a2.003 2.003 0 01-.195-2.681l2.195-2.805A6 6 0 007 16.263v-3.264a9 9 0 018-8.945V2.999a1 1 0 011-1z" />
      </svg>
    ),
  ),
);
MuteNotificationBorder.displayName = 'MuteNotificationBorder';
MuteNotificationBorder['iconName'] = 'mute-notification_border';
export default MuteNotificationBorder;
