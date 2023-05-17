import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ParkCallSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M7.429 12c0 5.554 4.217 10.117 9.488 10.281l.289.005 5.895-.001-1.598-1.596 1.215-1.214 3.665 3.667-3.666 3.665-1.213-1.213 1.597-1.597h-5.89c-6.105.002-11.155-5.008-11.48-11.351l-.013-.326-.003-.321h1.713zm10-6.857a7.294 7.294 0 0 1 7.281 7.024l.005.262a7.294 7.294 0 0 1-7.024 7.281l-.262.005a7.295 7.295 0 0 1-7.286-7.285 7.293 7.293 0 0 1 7.024-7.281l.262-.005zm.857 3.428h-1.714v4.598l2.791 2.901 1.209-1.213-2.286-2.399V8.571z" />
    </svg>
  )),
);
ParkCallSp.displayName = 'ParkCallSp';
ParkCallSp['iconName'] = 'park-call_sp';
export default ParkCallSp;
