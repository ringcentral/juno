import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PresenceOffline = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14z" />
    </svg>
  )),
);
PresenceOffline.displayName = 'PresenceOffline';
PresenceOffline['iconName'] = 'presence-offline';
export default PresenceOffline;
