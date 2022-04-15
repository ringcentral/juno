import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Foldercreated = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27.2 7.95H16l-1.98-1.944a2.826 2.826 0 0 0-1.98-.806H4.799c-1.54 0-2.8 1.237-2.8 2.75v16.5c0 1.512 1.26 2.75 2.8 2.75h22.4c1.54 0 2.8-1.238 2.8-2.75V10.7c0-1.512-1.26-2.75-2.8-2.75z" />
    </svg>
  )),
);
Foldercreated.displayName = 'Foldercreated';
Foldercreated['iconName'] = 'foldercreated';
export default Foldercreated;
