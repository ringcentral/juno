import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Reset = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M5 3a1 1 0 0 0-1 1v6a1 1 0 0 0 .878.993h.005L5 11h6a1 1 0 0 0 0-2l-3.486-.001C9.543 6.549 12.585 5 15.99 5h.011H16c6.075 0 11 4.925 11 11s-4.925 11-11 11S5 22.075 5 16a1 1 0 0 0-2 0c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3h-.011a12.953 12.953 0 0 0-9.973 4.672l-.017.021L6 4a1 1 0 0 0-1-1z" />
    </svg>
  )),
);
Reset.displayName = 'Reset';
Reset['iconName'] = 'reset';
export default Reset;
