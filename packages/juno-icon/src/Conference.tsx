import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Conference = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28.758 21.902a3 3 0 1 1-3 5.196 3 3 0 1 1 3-5.196zM7.34 23a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3zM16 10a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0-8a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
  )),
);
Conference.displayName = 'Conference';
Conference['iconName'] = 'conference';
export default Conference;
