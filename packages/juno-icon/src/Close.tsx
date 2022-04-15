import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Close = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M25.899 7.515 17.414 16l8.485 8.486a1 1 0 0 1-1.414 1.414L16 17.413 7.515 25.9a1 1 0 0 1-1.414-1.414l8.485-8.487-8.485-8.484a.999.999 0 1 1 1.414-1.414l8.486 8.485 8.485-8.485A.999.999 0 1 1 25.9 7.515z" />
    </svg>
  )),
);
Close.displayName = 'Close';
Close['iconName'] = 'close';
export default Close;
