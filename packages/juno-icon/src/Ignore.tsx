import React, { forwardRef, memo } from 'react';

const Ignore = memo(
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
        <path d="M26.286 14c.947 0 1.714.895 1.714 2s-.767 2-1.714 2H5.715c-.947 0-1.714-.895-1.714-2s.768-2 1.714-2h20.571z" />
      </svg>
    ),
  ),
);
Ignore.displayName = 'Ignore';
Ignore['iconName'] = 'ignore';
export default Ignore;
