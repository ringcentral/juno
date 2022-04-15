import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Signal2 = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M6 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 26 14z" />
    </svg>
  )),
);
Signal2.displayName = 'Signal2';
Signal2['iconName'] = 'signal-2';
export default Signal2;
