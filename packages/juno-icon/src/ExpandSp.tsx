import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ExpandSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M4.8 4.8h2.4v22.4H4.8V4.8zm23.2 10H13.339l5.021-5.019L16.68 8 8.8 16l8 8 1.68-1.699-5.141-5.101H28v-2.4z" />
    </svg>
  )),
);
ExpandSp.displayName = 'ExpandSp';
ExpandSp['iconName'] = 'expand_sp';
export default ExpandSp;
