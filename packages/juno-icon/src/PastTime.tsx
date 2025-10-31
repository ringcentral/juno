import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PastTime = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 3.11c7.118 0 12.888 5.77 12.888 12.888v.005c0 7.118-5.77 12.888-12.888 12.888a12.848 12.848 0 0 1-9.157-3.819l-.001-.001a.891.891 0 0 1 1.265-1.25l-.001-.001A11.078 11.078 0 0 0 16 27.113c6.136 0 11.11-4.974 11.11-11.11v-.028c0-6.136-4.974-11.11-11.11-11.11-5.585 0-10.208 4.121-10.993 9.488l-.007.06 2.192-1.429a.89.89 0 0 1 .974 1.487l-.002.002-3.947 2.576a.89.89 0 0 1-1.228-.254l-.002-.003-2.574-3.949a.89.89 0 0 1 1.487-.974l.002.002 1.371 2.101C4.291 7.781 9.601 3.115 16.002 3.113z" />
      <path d="M16 7.11c.491 0 .888.4.888.89v7.36l3.998 1.331a.89.89 0 0 1-.569 1.685l.006.002-4.606-1.536a.899.899 0 0 1-.608-.841v-8c0-.491.398-.888.89-.89z" />
    </svg>
  )),
);
PastTime.displayName = 'PastTime';
PastTime['iconName'] = 'past-time';
export default PastTime;
