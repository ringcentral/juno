import React, { forwardRef, memo } from 'react';

const AddEvent = memo(
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
        <path d="M23 17a1 1 0 011 1v4h4a1 1 0 010 2h-4.001L24 28a1 1 0 01-2 0l-.001-4H18a1 1 0 010-2h4v-4a1 1 0 011-1zM21 2a1 1 0 01.993.883L22 3v1h4a2 2 0 011.994 1.851L28 6l.001 10.755a7.992 7.992 0 00-2-1.173L26 10H6v15a1 1 0 00.883.993L7 26l8.582.001a8.01 8.01 0 001.173 2L6 28a2.001 2.001 0 01-1.995-1.851L3.999 26V6c0-1.054.816-1.918 1.851-1.995L5.999 4h4V3a1 1 0 011.993-.117l.007.117v1h8V3a1 1 0 011-1zm4 4H7a1 1 0 00-.993.883L6 7v1h20V7a1 1 0 00-.883-.993L25 6z" />
      </svg>
    ),
  ),
);
AddEvent.displayName = 'AddEvent';
AddEvent['iconName'] = 'add-event';
export default AddEvent;
