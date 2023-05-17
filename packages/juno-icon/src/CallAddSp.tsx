import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const CallAddSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M17.714 6.857v7.429h7.429v3.429h-7.429v7.429h-3.429v-7.429H6.856v-3.429h7.429V6.857z" />
    </svg>
  )),
);
CallAddSp.displayName = 'CallAddSp';
CallAddSp['iconName'] = 'call-add_sp';
export default CallAddSp;
