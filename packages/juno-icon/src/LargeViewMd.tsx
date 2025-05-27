import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const LargeViewMd = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28.52 2.8H3.501A3.2 3.2 0 0 0 .301 6v20a3.198 3.198 0 0 0 3.2 3.2H28.52a3.2 3.2 0 0 0 3.2-3.2V6a3.2 3.2 0 0 0-3.2-3.2zM2.701 26V6a.8.8 0 0 1 .8-.8h8.8v21.6h-8.8a.8.8 0 0 1-.8-.8zm26.619 0a.8.8 0 0 1-.8.8H14.701V5.2H28.52a.8.8 0 0 1 .8.8v20zM10 11a2.501 2.501 0 1 1-5.003 0A2.501 2.501 0 0 1 10 11z" />
    </svg>
  )),
);
LargeViewMd.displayName = 'LargeViewMd';
LargeViewMd['iconName'] = 'LargeViewMD';
export default LargeViewMd;
