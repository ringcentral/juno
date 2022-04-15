import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const DockBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M8 10v2H4v16h16v-4h2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h4zm20-8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16zm0 2H12v16h16V4zm-2.808 2.707a.999.999 0 0 1 0 1.414l-6.498 6.499 2.356 2.309h-6L15 11l2.266 2.221 6.513-6.514a.999.999 0 0 1 1.414 0z" />
    </svg>
  )),
);
DockBorder.displayName = 'DockBorder';
DockBorder['iconName'] = 'dock_border';
export default DockBorder;
