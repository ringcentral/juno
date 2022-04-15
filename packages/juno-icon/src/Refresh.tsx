import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Refresh = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27 3a1 1 0 0 1 1 1v6a1 1 0 0 1-.883.993L27 11h-6a1 1 0 0 1 0-2l3.486-.001A10.981 10.981 0 0 0 16 5C9.925 5 5 9.925 5 16s4.925 11 11 11 11-4.925 11-11a1 1 0 0 1 2 0c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3a12.98 12.98 0 0 1 10.001 4.693L26 4a1 1 0 0 1 1-1z" />
    </svg>
  )),
);
Refresh.displayName = 'Refresh';
Refresh['iconName'] = 'refresh';
export default Refresh;
