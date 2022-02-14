import React, { forwardRef, memo } from 'react';

const ChevronLeft = memo(
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
        <path d="M9.318 14.939a1.5 1.5 0 000 2.121l10.607 10.607a1.5 1.5 0 102.121-2.121L12.5 16l9.546-9.546a1.5 1.5 0 10-2.121-2.121L9.318 14.94z" />
      </svg>
    ),
  ),
);
ChevronLeft.displayName = 'ChevronLeft';
ChevronLeft['iconName'] = 'chevron_left';
export default ChevronLeft;
