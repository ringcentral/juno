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
      <path d="M4.8 3.2v25.6H2.4V3.2h2.4zm24.8 11.6H10.139l8.221-8.219L16.68 4.8 5.6 16l11.2 11.2 1.68-1.699-8.341-8.301H29.6v-2.4z" />
    </svg>
  )),
);
ExpandSp.displayName = 'ExpandSp';
ExpandSp['iconName'] = 'expand_sp';
export default ExpandSp;
