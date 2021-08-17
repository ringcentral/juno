import React, { forwardRef, memo } from 'react';

const Italic = memo(
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
        <path d="M26 4a1 1 0 010 2h-6.237l-5.455 20H20a1 1 0 010 2H6a1 1 0 010-2h6.236L17.69 6H12a1 1 0 010-2h14z" />
      </svg>
    ),
  ),
);
Italic.displayName = 'Italic';
Italic['iconName'] = 'italic';
export default Italic;
