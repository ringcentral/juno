import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const JumpToLatest = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M6.101 17.101a.999.999 0 0 1 1.414 0L15 24.586V5a1 1 0 0 1 2 0v19.588l7.486-7.488a.999.999 0 1 1 1.414 1.414l-9.192 9.192a.999.999 0 0 1-1.414 0l-9.192-9.192a.999.999 0 0 1 0-1.414z" />
    </svg>
  )),
);
JumpToLatest.displayName = 'JumpToLatest';
JumpToLatest['iconName'] = 'jump-to-latest';
export default JumpToLatest;
