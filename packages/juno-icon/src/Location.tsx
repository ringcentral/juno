import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Location = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2c6.627 0 12 5.373 12 12 0 4.418-4 10.418-12 18C8 24.418 4 18.418 4 14 4 7.373 9.373 2 16 2zm0 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    </svg>
  )),
);
Location.displayName = 'Location';
Location['iconName'] = 'location';
export default Location;
