import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const LeaveMeeting = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M30.825 21.116a3.86 3.86 0 0 1-2.674.85l-.245-.026-5.332-.752c-1.588-.217-2.603-1.034-2.697-2.177l-.007-.193.012-.872c-.012-.608-.388-.945-1.403-1.042a30.137 30.137 0 0 0-2.5-.125 43.57 43.57 0 0 0-2.932.102c-.971.063-1.344.371-1.386.911l-.004.119.014.879c.032 1.172-.88 2.012-2.406 2.298l-.26.042-4.872.709c-1.326.187-2.23-.088-2.998-.72-.534-.44-.936-1.186-1.084-1.909l-.04-.24L0 18.691c-.003-1.909.587-3.357 2.115-4.616 3.28-2.703 7.246-4.015 13.718-4.074 6.49-.058 10.759 1.396 13.733 3.847 1.814 1.495 2.359 2.83 2.428 4.743l.007.307-.073.451c-.146.7-.543 1.306-1.102 1.767z" />
    </svg>
  )),
);
LeaveMeeting.displayName = 'LeaveMeeting';
LeaveMeeting['iconName'] = 'leave-meeting';
export default LeaveMeeting;
