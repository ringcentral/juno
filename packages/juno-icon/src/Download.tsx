import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Download = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27 26a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h22zM16 3a1 1 0 0 1 .993.883L17 4v16.17l6.885-6.875a.998.998 0 0 1 1.493 1.316l-.083.094-8.588 8.588a.999.999 0 0 1-1.414 0l-8.588-8.588a.998.998 0 0 1 1.316-1.493l.094.083L15 20.17V4a1 1 0 0 1 1-1z" />
    </svg>
  )),
);
Download.displayName = 'Download';
Download['iconName'] = 'download';
export default Download;
