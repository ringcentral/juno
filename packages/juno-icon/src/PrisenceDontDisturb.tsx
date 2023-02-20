import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PrisenceDontDisturb = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm7.389 15.944H8.611a1.944 1.944 0 0 1 0-3.888h14.778a1.944 1.944 0 0 1 0 3.888z" />
    </svg>
  )),
);
PrisenceDontDisturb.displayName = 'PrisenceDontDisturb';
PrisenceDontDisturb['iconName'] = 'prisence-dont_disturb';
export default PrisenceDontDisturb;
