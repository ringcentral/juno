import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AppsCategories = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28 24a2 2 0 1 1 0 4H11a2 2 0 1 1 0-4h17zM4 24a2 2 0 1 1 .001 3.999A2 2 0 0 1 4 24zm24-10a2 2 0 1 1 0 4H11a2 2 0 1 1 0-4h17zM4 14a2 2 0 1 1 .001 3.999A2 2 0 0 1 4 14zM28 4a2 2 0 1 1 0 4H11a2 2 0 1 1 0-4h17zM4 4a2 2 0 1 1 .001 3.999A2 2 0 0 1 4 4z" />
    </svg>
  )),
);
AppsCategories.displayName = 'AppsCategories';
AppsCategories['iconName'] = 'apps-categories';
export default AppsCategories;
