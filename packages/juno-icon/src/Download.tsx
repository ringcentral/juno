import React, { forwardRef, memo } from 'react';

const Download = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        {...props}
      >
        <path d="M27 26a1 1 0 010 2H5a1 1 0 010-2h22zM16 3a1 1 0 01.993.883L17 4v16.17l6.885-6.875a.998.998 0 011.493 1.316l-.083.094-8.588 8.588a.999.999 0 01-1.414 0l-8.588-8.588a.998.998 0 011.316-1.493l.094.083L15 20.17V4a1 1 0 011-1z" />
      </svg>
    ),
  ),
);
Download.displayName = 'Download';
Download['iconName'] = 'download';
export default Download;
