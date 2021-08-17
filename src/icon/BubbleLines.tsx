import React, { forwardRef, memo } from 'react';

const BubbleLines = memo(
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
        <path d="M22 9a2 2 0 012 2v12a2 2 0 01-2 2h-4.586a.997.997 0 00-.707.293l-3.141 3.141a.8.8 0 01-1.131 0l-3.141-3.141A1 1 0 008.587 25H4.001a2 2 0 01-2-2V11a2 2 0 012-2h18zm6-6a2 2 0 012 2v12a2 2 0 01-2 2h-3v-9a2.001 2.001 0 00-1.851-1.995L23 8H8V5a2 2 0 012-2h18z" />
      </svg>
    ),
  ),
);
BubbleLines.displayName = 'BubbleLines';
BubbleLines['iconName'] = 'bubble_lines';
export default BubbleLines;
