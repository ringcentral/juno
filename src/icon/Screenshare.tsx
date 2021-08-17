import React, { forwardRef, memo } from 'react';

const Screenshare = memo(
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
        <path d="M27 5H5a2 2 0 00-2 2v18H1a1 1 0 000 2h30a1 1 0 000-2h-2V7a2 2 0 00-2-2zm-10.293 5.293l4.657 4.657a1 1 0 01-1.32 1.497l-.094-.083-2.951-2.95L17 21a1 1 0 01-2 0l-.001-7.586-2.949 2.95a1 1 0 01-1.497-1.32l.083-.094 4.657-4.657a1 1 0 011.32-.083l.094.083z" />
      </svg>
    ),
  ),
);
Screenshare.displayName = 'Screenshare';
Screenshare['iconName'] = 'screenshare';
export default Screenshare;
