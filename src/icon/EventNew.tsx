import React, { forwardRef, memo } from 'react';

const EventNew = memo(
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
        <path d="M28 10v16a2 2 0 01-1.851 1.994L26 28H6a2.001 2.001 0 01-1.995-1.851L3.999 26V10h24zm-9 3h-6l-.117.007a1 1 0 000 1.986L13 15h4.301l-4.175 7.514-.051.105a1 1 0 001.736.965l.063-.099 5-9 .049-.101a1 1 0 00-.805-1.378L19 12.999zM4 6c0-1.054.816-1.918 1.851-1.995L6 3.999h4v-1a1 1 0 011.993-.117l.007.117v1h8v-1a1 1 0 011.993-.117l.007.117v1h4a2 2 0 011.994 1.851l.006.149v2H4v-2z" />
      </svg>
    ),
  ),
);
EventNew.displayName = 'EventNew';
EventNew['iconName'] = 'event-new';
export default EventNew;
