import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const WhatsNew = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M12 10.048v8H8v-8h4zm2-.292 10-4.754v18.092L14 18.34V9.755zM8 8.048a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2c0 .74.402 1.387 1 1.732v5.268a3 3 0 1 0 6 0v-5l10.257 4.903A2 2 0 0 0 26 23.094v-5.046a4 4 0 0 0 0-8V5.002a2 2 0 0 0-2.743-1.857L13 8.048H8zm-4 4h2v4H4v-4zm5 13v-5h2v5a1 1 0 0 1-2 0zm19-11a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2z" />
    </svg>
  )),
);
WhatsNew.displayName = 'WhatsNew';
WhatsNew['iconName'] = 'whats-new';
export default WhatsNew;
