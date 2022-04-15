import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const LocationBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2c6.627 0 12 5.373 12 12 0 4.418-4 10.418-12 18C8 24.418 4 18.418 4 14 4 7.373 9.373 2 16 2zm0 2C10.477 4 6 8.477 6 14c0 3.433 3.233 8.527 9.801 15.024l.199.196.199-.196c6.442-6.372 9.675-11.395 9.797-14.824L26 14c0-5.523-4.477-10-10-10zm0 4a5 5 0 1 1-.001 10.001A5 5 0 0 1 16 8zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  )),
);
LocationBorder.displayName = 'LocationBorder';
LocationBorder['iconName'] = 'location_border';
export default LocationBorder;
