import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PresenceAway = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M26.667 22H13.334a3.333 3.333 0 0 1-3.333-3.333V5.334a3.333 3.333 0 1 1 6.666 0v10h10a3.333 3.333 0 1 1 0 6.666z" />
    </svg>
  )),
);
PresenceAway.displayName = 'PresenceAway';
PresenceAway['iconName'] = 'presence-away';
export default PresenceAway;
