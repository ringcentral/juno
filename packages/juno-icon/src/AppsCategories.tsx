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
      <path d="M4 5h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM4 19h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zM14 5h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM14 19h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" />
    </svg>
  )),
);
AppsCategories.displayName = 'AppsCategories';
AppsCategories['iconName'] = 'apps-categories';
export default AppsCategories;
