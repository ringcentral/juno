import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AppsProduct = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28 9a2 2 0 0 1 1.994 1.851L30 11v17a2 2 0 0 1-1.851 1.994L28 30H4a2 2 0 0 1-1.994-1.851L2 28V11c0-1.054.816-1.918 1.851-1.995L4 9h24zm-7.177 3.591a7.857 7.857 0 0 1-4.278 1.26 7.87 7.87 0 0 1-4.279-1.26 1.5 1.5 0 1 0-1.625 2.521 10.863 10.863 0 0 0 5.904 1.738c2.122 0 4.157-.611 5.905-1.739a1.5 1.5 0 0 0-1.627-2.521zm.444-11.01.098.077 3.621 3.211a1 1 0 0 1-.546 1.741l-.117.007H7.626a1 1 0 0 1-.958-1.287l.04-.11 1.096-2.538a1 1 0 0 1 1.199-.563l.11.039 7.569 3.211 3.277-3.633a1 1 0 0 1 1.308-.155z" />
    </svg>
  )),
);
AppsProduct.displayName = 'AppsProduct';
AppsProduct['iconName'] = 'apps-product';
export default AppsProduct;
