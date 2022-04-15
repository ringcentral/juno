import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ParkLocationFull = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M22 2a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V10a8 8 0 0 1 8-8h12zm-4.639 7.226h-3.262l-.153.007-.154.021a1.813 1.813 0 0 0-1.499 1.787V21.5l.007.116.022.122c.113.475.529.812 1.017.812.578 0 1.046-.47 1.046-1.05l-.001-3.527 2.959.001.221-.005.219-.014c2.312-.2 3.912-1.95 3.912-4.328 0-2.582-1.785-4.399-4.333-4.399zm-.417 1.922.201.004c1.58.066 2.411.921 2.411 2.475s-.933 2.424-2.612 2.424h-2.561v-4.903h2.561z" />
    </svg>
  )),
);
ParkLocationFull.displayName = 'ParkLocationFull';
ParkLocationFull['iconName'] = 'park-location-full';
export default ParkLocationFull;
