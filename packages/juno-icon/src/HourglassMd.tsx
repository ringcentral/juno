import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const HourglassMd = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27.2 4h-2.4v2.224a8.7 8.7 0 0 1-3.186 6.738l-.015.012-3.77 3.08 3.59 2.978a8.71 8.71 0 0 1 3.15 6.71v2.259h2.63v2.4h-22.4v-2.4h2.4v-2.224a8.7 8.7 0 0 1 3.186-6.738l.015-.012 3.653-2.986-3.704-3.072a8.71 8.71 0 0 1-3.15-6.71V4h-2.4V1.6h22.4zM11.92 20.885a6.315 6.315 0 0 0-2.32 4.891V28h12.57V25.743a6.309 6.309 0 0 0-2.273-4.855l-.01-.008-3.95-3.28zM9.6 6.256v.001c0 1.951.884 3.695 2.273 4.855l.01.008 4.064 3.371 4.133-3.376a6.312 6.312 0 0 0 2.32-4.893V4H9.6z" />
    </svg>
  )),
);
HourglassMd.displayName = 'HourglassMd';
HourglassMd['iconName'] = 'HourglassMD';
export default HourglassMd;
