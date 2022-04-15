import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ListView = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M26.667 22.667a1.333 1.333 0 0 1 0 2.666H5.334a1.333 1.333 0 0 1 0-2.666h21.333zm0-8a1.333 1.333 0 0 1 0 2.666H5.334a1.333 1.333 0 0 1 0-2.666h21.333zm0-8a1.333 1.333 0 0 1 0 2.666H5.334a1.333 1.333 0 0 1 0-2.666h21.333z" />
    </svg>
  )),
);
ListView.displayName = 'ListView';
ListView['iconName'] = 'list-view';
export default ListView;
