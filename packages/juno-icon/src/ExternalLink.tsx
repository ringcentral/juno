import React, { forwardRef, memo } from 'react';

const ExternalLink = memo(
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
        <path d="M25 29H5a2 2 0 01-2-2V7a2 2 0 012-2h8a1 1 0 010 2H6a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1v-7a1 1 0 012 0v8a2 2 0 01-2 2zM20 4a1 1 0 001 1h4.59l-7.885 7.885a.998.998 0 001.41 1.41L27 6.41V11a1 1 0 002 0V4a1 1 0 00-1-1h-7a1 1 0 00-1 1z" />
      </svg>
    ),
  ),
);
ExternalLink.displayName = 'ExternalLink';
ExternalLink['iconName'] = 'external_link';
export default ExternalLink;
