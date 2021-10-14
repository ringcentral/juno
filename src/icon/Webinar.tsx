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
        <path d="M28 3a2 2 0 012 2v18a2 2 0 01-2 2H17v2h4a1 1 0 010 2H11a1 1 0 010-2h4v-2H4a2 2 0 01-2-2V5a2 2 0 012-2h24zm-6 14c-3.262 0-6 2.157-6 5 0 .552.413 1 .923 1h10.154c.51 0 .923-.448.923-1 0-2.843-2.738-5-6-5zm-9-2H7a1 1 0 000 2h6a1 1 0 000-2zm9-6.5a3 3 0 100 6 3 3 0 000-6zM13 9H7a1 1 0 000 2h6a1 1 0 000-2z" />
      </svg>
    ),
  ),
);
Webinar.displayName = 'Webinar';
Webinar['iconName'] = 'webinar';
export default Webinar;
