import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Harvest = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M18.292 14.254h-4.474V7.598h-3.274v16.75h3.274v-7.257h4.474v7.257h3.274V7.598h-3.274v6.656zM2.033 4.366a2.333 2.333 0 0 1 2.334-2.334h23.268a2.334 2.334 0 0 1 2.334 2.334v23.268a2.333 2.333 0 0 1-2.334 2.334H4.367a2.334 2.334 0 0 1-2.334-2.334V4.366z" />
    </svg>
  )),
);
Harvest.displayName = 'Harvest';
Harvest['iconName'] = 'harvest';
export default Harvest;
