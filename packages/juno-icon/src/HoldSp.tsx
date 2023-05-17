import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const HoldSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M13.143 8v16H9.714V8h3.429zm9.143 0v16h-3.429V8h3.429z" />
    </svg>
  )),
);
HoldSp.displayName = 'HoldSp';
HoldSp['iconName'] = 'hold_sp';
export default HoldSp;
