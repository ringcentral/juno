import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Send = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m28.941 4.342-8.666 24c-.305.843-1.48.891-1.851.074l-4.637-10.201-10.201-4.637c-.816-.371-.769-1.546.074-1.851l24-8.666a1 1 0 0 1 1.28 1.28zm-3.406 3.539-9.796 9.796 3.489 7.675 6.307-17.471zM24.12 6.466 6.65 12.775l7.674 3.487 9.796-9.796z" />
    </svg>
  )),
);
Send.displayName = 'Send';
Send['iconName'] = 'send';
export default Send;
