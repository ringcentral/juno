import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const CallMoreSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M8.286 13.429a2.57 2.57 0 1 1 0 5.142 2.57 2.57 0 0 1 0-5.142zm7.714 0a2.57 2.57 0 1 1 0 5.142 2.57 2.57 0 0 1 0-5.142zm7.714 0a2.57 2.57 0 1 1 0 5.142 2.57 2.57 0 0 1 0-5.142z" />
    </svg>
  )),
);
CallMoreSp.displayName = 'CallMoreSp';
CallMoreSp['iconName'] = 'call-more_sp';
export default CallMoreSp;
