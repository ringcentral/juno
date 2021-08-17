import React, { forwardRef, memo } from 'react';

const Apps = memo(
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
        <path d="M28 18a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2v-8a2 2 0 012-2h8zm-16 0a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2h8zm0-16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h8zm16 0a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2V4a2 2 0 012-2h8z" />
      </svg>
    ),
  ),
);
Apps.displayName = 'Apps';
Apps['iconName'] = 'apps';
export default Apps;
