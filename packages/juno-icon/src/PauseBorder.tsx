import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PauseBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M11 25H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm1-20H8a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm11 20h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm1-20h-4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
    </svg>
  )),
);
PauseBorder.displayName = 'PauseBorder';
PauseBorder['iconName'] = 'pause_border';
export default PauseBorder;
