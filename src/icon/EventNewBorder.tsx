import React, { forwardRef, memo } from 'react';

const EventNewBorder = memo(
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
        <path d="M21 2a1 1 0 01.993.883L22 3v1h4a2 2 0 011.994 1.851L28 6v20a2 2 0 01-1.851 1.994L26 28H6a2.001 2.001 0 01-1.995-1.851L3.999 26V6c0-1.054.816-1.918 1.851-1.995l.149-.006h4v-1a1 1 0 011.993-.117l.007.117v1h8v-1a1 1 0 011-1zm5 8H6v15a1 1 0 00.883.993L7 26h18a1 1 0 00.993-.883L26 25V10zm-13 3h6a1 1 0 01.923 1.385l-.049.101-5 9a1 1 0 01-1.799-.866l.051-.105 4.175-7.514h-4.3a1 1 0 01-.117-1.993l.117-.007zm12-7H7a1 1 0 00-.993.883L6 7v1h20V7a1 1 0 00-.883-.993L25 6z" />
      </svg>
    ),
  ),
);
EventNewBorder.displayName = 'EventNewBorder';
EventNewBorder['iconName'] = 'event-new_border';
export default EventNewBorder;
