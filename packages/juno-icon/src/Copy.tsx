import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Copy = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27 28H10a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1zm1-21H9a2 2 0 0 0-2 2v19a2 2 0 0 0 2 2h19a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM3 18a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h13a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v12a1 1 0 0 1-1 1z" />
    </svg>
  )),
);
Copy.displayName = 'Copy';
Copy['iconName'] = 'copy';
export default Copy;
