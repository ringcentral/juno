import React, { forwardRef, memo } from 'react';

const Webinar = memo(
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
        <path d="M8 24c3.262 0 6 2.157 6 5 0 .552-.413 1-.923 1H2.923C2.413 30 2 29.552 2 29c0-2.843 2.738-5 6-5zm16 0c3.262 0 6 2.157 6 5 0 .552-.413 1-.923 1H18.923c-.51 0-.923-.448-.923-1 0-2.843 2.738-5 6-5zm4-22c1.105 0 2 1.007 2 2.25v13.5c0 1.243-.895 2.25-2 2.25h-1.171a3 3 0 11-5.658 0H10.83a3 3 0 11-5.658 0H4.001c-1.105 0-2-1.007-2-2.25V4.25c0-1.243.895-2.25 2-2.25h24zM16 6a5 5 0 10.001 10.001A5 5 0 0016 6z" />
      </svg>
    ),
  ),
);
Webinar.displayName = 'Webinar';
Webinar['iconName'] = 'webinar';
export default Webinar;
