import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const JumpToUnread = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M6.101 14.899a.999.999 0 0 0 1.414 0L15 7.413v19.586a1 1 0 0 0 2 0V7.411l7.486 7.488a.999.999 0 1 0 1.414-1.414l-9.192-9.192a.999.999 0 0 0-1.414 0l-9.192 9.192a.999.999 0 0 0 0 1.414z" />
    </svg>
  )),
);
JumpToUnread.displayName = 'JumpToUnread';
JumpToUnread['iconName'] = 'jump-to-unread';
export default JumpToUnread;
