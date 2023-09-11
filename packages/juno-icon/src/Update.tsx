import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Update = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m25.813 6.324-1.964-4.598a.5.5 0 0 0-.893-.054l-.965 1.671A13.95 13.95 0 0 0 16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14c0-.757-.06-1.499-.176-2.224a.936.936 0 0 0-.937-.776c-.641 0-1.109.606-1.016 1.24.084.574.128 1.162.128 1.76 0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12c1.779 0 3.468.387 4.987 1.082l-1.031 1.786a.5.5 0 0 0 .493.746l4.964-.598a.5.5 0 0 0 .4-.693zm-4.106 5.969a1 1 0 0 1 0 1.414L14 21.414l-3.707-3.707a.999.999 0 1 1 1.414-1.414L14 18.586l6.293-6.293a1 1 0 0 1 1.414 0z" />
    </svg>
  )),
);
Update.displayName = 'Update';
Update['iconName'] = 'update';
export default Update;
