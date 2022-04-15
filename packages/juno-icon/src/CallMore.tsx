import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const CallMore = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M6 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm10 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm10 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
  )),
);
CallMore.displayName = 'CallMore';
CallMore['iconName'] = 'call-more';
export default CallMore;
