import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const FacebookShareNumberIcon = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#3768ea"
        d="M16 2C8.268 2 2 8.273 2 16.01c0 7.024 5.171 12.824 11.907 13.837V19.722h-3.464V16.04h3.464v-2.451c0-4.057 1.975-5.838 5.345-5.838 1.613 0 2.468.12 2.871.174v3.214h-2.298c-1.43 0-1.93 1.358-1.93 2.887v2.013h4.192l-.568 3.682h-3.624v10.154C24.728 28.948 30 23.101 30 16.008c0-7.737-6.268-14.01-14-14.01z"
      />
    </svg>
  )),
);
FacebookShareNumberIcon.displayName = 'FacebookShareNumberIcon';
FacebookShareNumberIcon['iconName'] = 'facebook-share-number-icon';
export default FacebookShareNumberIcon;
