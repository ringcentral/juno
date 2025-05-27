import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const CompactViewMd = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M22.501 2.8h-13a3.2 3.2 0 0 0-3.2 3.2v20a3.198 3.198 0 0 0 3.2 3.2h13a3.2 3.2 0 0 0 3.2-3.2V6a3.2 3.2 0 0 0-3.2-3.2zm-13 2.4h13a.8.8 0 0 1 .8.8v13.8h-14.6V6a.8.8 0 0 1 .8-.8zm13 21.6H9.499a.8.8 0 0 1-.8-.8v-3.8h14.6V26a.8.8 0 0 1-.798.8z" />
    </svg>
  )),
);
CompactViewMd.displayName = 'CompactViewMd';
CompactViewMd['iconName'] = 'CompactViewMD';
export default CompactViewMd;
