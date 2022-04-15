import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MuteNotification = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M25 13v3.264c0 1.34.449 2.642 1.275 3.698l2.195 2.805A2 2 0 0 1 26.895 26l-5.995.001a5.002 5.002 0 0 1-9.8 0H8.827l15.746-15.746c.277.865.426 1.787.426 2.745zm4.435-9.021a.999.999 0 0 1 0 1.414L5.393 29.435a.999.999 0 1 1-1.414-1.414L28.021 3.979a.999.999 0 0 1 1.414 0zM18.829 26.001h-5.658a3 3 0 0 0 5.658 0zM16 2a1 1 0 0 1 1 1l.001 1.055a8.975 8.975 0 0 1 5.449 2.668L3.725 25.448a2.003 2.003 0 0 1-.195-2.681l2.195-2.805A6 6 0 0 0 7 16.264V13a9 9 0 0 1 8-8.945V3a1 1 0 0 1 1-1z" />
    </svg>
  )),
);
MuteNotification.displayName = 'MuteNotification';
MuteNotification['iconName'] = 'mute-notification';
export default MuteNotification;
