import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PrisenceAway = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm7.389 16.022h-7.778a1.944 1.944 0 0 1-1.944-1.944V8.3a1.944 1.944 0 0 1 3.888 0v5.833h5.833a1.944 1.944 0 0 1 0 3.888z" />
    </svg>
  )),
);
PrisenceAway.displayName = 'PrisenceAway';
PrisenceAway['iconName'] = 'prisence-away';
export default PrisenceAway;
