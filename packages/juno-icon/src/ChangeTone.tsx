import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ChangeTone = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 6.5a1 1 0 0 1 1 1v17a1 1 0 0 1-2 0v-17a1 1 0 0 1 1-1zM10 11a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 1-1zM4 13.677a1 1 0 0 1 1 1V17.5a1 1 0 0 1-2 0v-2.823a1 1 0 0 1 1-1zM22 11a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 1-1zM28 13.677a1 1 0 0 1 1 1V17.5a1 1 0 0 1-2 0v-2.823a1 1 0 0 1 1-1z" />
    </svg>
  )),
);
ChangeTone.displayName = 'ChangeTone';
ChangeTone['iconName'] = 'change-tone';
export default ChangeTone;
