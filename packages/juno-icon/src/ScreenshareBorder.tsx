import React, { forwardRef, memo } from 'react';

const ScreenshareBorder = memo(
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
        <path d="M27 5a2 2 0 011.994 1.851L29 7v18h2a1 1 0 01.117 1.993L31 27H1a1 1 0 01-.117-1.993L1 25h2V7c0-1.054.816-1.918 1.851-1.995L5 5h22zm0 2H5v18h22V7zm-10.387 3.21l.094.083 4.657 4.657a1 1 0 01-1.32 1.497l-.094-.083-2.951-2.95L17 21a1 1 0 01-2 0l-.001-7.586-2.949 2.95a1 1 0 01-1.497-1.32l.083-.094 4.657-4.657a1 1 0 011.32-.083z" />
      </svg>
    ),
  ),
);
ScreenshareBorder.displayName = 'ScreenshareBorder';
ScreenshareBorder['iconName'] = 'screenshare_border';
export default ScreenshareBorder;
