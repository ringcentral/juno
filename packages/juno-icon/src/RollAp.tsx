import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const RollAp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M13 18a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0l-.001-5.586-5.827 5.829a.999.999 0 1 1-1.414-1.414L10.585 20H5a1 1 0 0 1 0-2h8zm6-14a1 1 0 0 1 1 1l.001 5.586 5.827-5.829a.999.999 0 1 1 1.414 1.414L21.415 12H27a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
    </svg>
  )),
);
RollAp.displayName = 'RollAp';
RollAp['iconName'] = 'roll-ap';
export default RollAp;
