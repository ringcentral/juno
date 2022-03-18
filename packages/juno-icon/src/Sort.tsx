import React, { forwardRef, memo } from 'react';

const Sort = memo(
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
        <path
          fill="var(--color17, #000)"
          d="M16.707 5.293l5.586 5.586a1 1 0 01-.707 1.707H10.414a1 1 0 01-.707-1.707l5.586-5.586a.999.999 0 011.414 0z"
        />
        <path
          fill="var(--color53, #212121)"
          d="M16.703 26.293l5.586-5.586A1 1 0 0021.582 19H10.41a1 1 0 00-.707 1.707l5.586 5.586a1 1 0 001.414 0z"
        />
      </svg>
    ),
  ),
);
Sort.displayName = 'Sort';
Sort['iconName'] = 'sort';
export default Sort;
