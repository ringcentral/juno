import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Paging = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#066fac"
        d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
      />
      <path
        fill="#fff"
        d="M22 11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h12zm-10 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-3.5-4h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm2-2h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"
      />
    </svg>
  )),
);
Paging.displayName = 'Paging';
Paging['iconName'] = 'Paging';
export default Paging;
