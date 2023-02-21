import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const WhatIsNew = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27 3a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h22zm-8 13H9a1 1 0 0 0-.117 1.993L9 18h10a1 1 0 0 0 .117-1.993L19 16zm4-6H9a1 1 0 0 0-.117 1.993L9 12h14a1 1 0 0 0 .117-1.993L23 10z" />
    </svg>
  )),
);
WhatIsNew.displayName = 'WhatIsNew';
WhatIsNew['iconName'] = 'what-is-new';
export default WhatIsNew;
