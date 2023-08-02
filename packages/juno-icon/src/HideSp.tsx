import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const HideSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27.2 28.8V3.2h2.4v25.6h-2.4zM2.4 17.2h19.46l-8.22 8.22 1.68 1.78L26.4 16 15.2 4.8l-1.68 1.7 8.34 8.3H2.4v2.4z" />
    </svg>
  )),
);
HideSp.displayName = 'HideSp';
HideSp['iconName'] = 'hide_sp';
export default HideSp;
