import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PrisenceOffline = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2a14.002 14.002 0 0 1 14 14c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 5.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8z" />
    </svg>
  )),
);
PrisenceOffline.displayName = 'PrisenceOffline';
PrisenceOffline['iconName'] = 'prisence-offline';
export default PrisenceOffline;
