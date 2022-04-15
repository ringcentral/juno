import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const InsertLink = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16.607 5.494a7 7 0 0 1 9.899 9.899l-2.364 2.367a9.05 9.05 0 0 0-.122-2.708l1.071-1.073a5 5 0 0 0 0-7.071 5 5 0 0 0-7.071 0l-4.243 4.243a5 5 0 0 0 2.828 8.485l-1.645 1.645a6.999 6.999 0 0 1-2.597-11.544l4.243-4.243zM6 16.101l2.364-2.367a9.05 9.05 0 0 0 .122 2.708l-1.071 1.073a5 5 0 0 0 0 7.071 5 5 0 0 0 7.071 0l4.243-4.243a5 5 0 0 0-2.828-8.485l1.645-1.645a6.999 6.999 0 0 1 2.597 11.544L15.9 26a7 7 0 0 1-9.899-9.899z" />
    </svg>
  )),
);
InsertLink.displayName = 'InsertLink';
InsertLink['iconName'] = 'insert-link';
export default InsertLink;
