import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PhoneInbox = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M10 7a1 1 0 0 1 .117 1.993L10 9H7.7l-3.273 9h4.745c.729 0 1.431.266 1.977.743l.145.136 1.828 1.828a.996.996 0 0 0 .576.284l.131.009h4.343a1 1 0 0 0 .608-.206l.099-.087 1.828-1.828a3 3 0 0 1 1.923-.872l.198-.006h4.744l-3.272-9H22a1 1 0 0 1-.117-1.993L22 7.001h2.3a2 2 0 0 1 1.82 1.171l.059.145 3.761 10.342a.978.978 0 0 1 .053.226l.007.116v7a2 2 0 0 1-1.851 1.994l-.149.006H4a2 2 0 0 1-1.994-1.851L2 26.001v-7c0-.078.009-.155.027-.23l.033-.111L5.821 8.318a1.999 1.999 0 0 1 1.723-1.31l.157-.006h2.3zm6-5a1 1 0 0 1 1 1v10.999l1.95-1.949a.999.999 0 1 1 1.414 1.414l-3.657 3.657a.999.999 0 0 1-1.414 0l-3.657-3.657a.999.999 0 1 1 1.414-1.414L15 14.001V3a1 1 0 0 1 1-1z" />
    </svg>
  )),
);
PhoneInbox.displayName = 'PhoneInbox';
PhoneInbox['iconName'] = 'phone-inbox';
export default PhoneInbox;
