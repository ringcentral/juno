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
      <path d="M28 10a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2zm-5.103 4.038a1.5 1.5 0 0 0-2.074-.447 7.857 7.857 0 0 1-4.278 1.26 7.87 7.87 0 0 1-4.279-1.26 1.5 1.5 0 1 0-1.625 2.521 10.863 10.863 0 0 0 5.904 1.738c2.122 0 4.157-.611 5.905-1.739a1.5 1.5 0 0 0 .447-2.074zM6.618 8a1 1 0 0 1-.894-1.448l1.829-3.658a1 1 0 0 1 1.342-.447l8.282 4.141 3.216-3.858a1 1 0 0 1 1.267-.227l.101.067 4.84 3.63a1 1 0 0 1-.6 1.8z" />
    </svg>
  )),
);
AppsProduct.displayName = 'AppsProduct';
AppsProduct['iconName'] = 'apps-product';
export default AppsProduct;
