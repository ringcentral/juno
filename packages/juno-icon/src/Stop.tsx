import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Stop = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M25 5a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h18z" />
    </svg>
  )),
);
Stop.displayName = 'Stop';
Stop['iconName'] = 'stop';
export default Stop;
