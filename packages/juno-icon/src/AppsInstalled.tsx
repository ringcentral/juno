import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AppsInstalled = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M14.172 2a3.724 3.724 0 0 1 3.724 3.724v.931h5.586c1.028 0 1.862.834 1.862 1.862v5.586h.931a3.724 3.724 0 1 1 0 7.448h-.931v5.586a1.862 1.862 0 0 1-1.862 1.862h-5.586v-.931a3.725 3.725 0 0 0-3.538-3.72l-.186-.005a3.725 3.725 0 0 0-3.72 3.538l-.005.186v.931H4.861a1.862 1.862 0 0 1-1.862-1.862V21.55h.931a3.725 3.725 0 0 0 3.72-3.538l.005-.186a3.725 3.725 0 0 0-3.538-3.72l-.186-.005H3V8.515c0-1.028.834-1.862 1.862-1.862h5.586v-.931a3.724 3.724 0 0 1 3.724-3.724z" />
    </svg>
  )),
);
AppsInstalled.displayName = 'AppsInstalled';
AppsInstalled['iconName'] = 'apps-installed';
export default AppsInstalled;
