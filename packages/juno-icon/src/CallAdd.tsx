import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const CallAdd = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 4a2 2 0 0 1 2 2v8h8a2 2 0 1 1 0 4h-8v8a2 2 0 1 1-4 0v-8H6a2 2 0 1 1 0-4h8V6a2 2 0 0 1 2-2z" />
    </svg>
  )),
);
CallAdd.displayName = 'CallAdd';
CallAdd['iconName'] = 'call-add';
export default CallAdd;
