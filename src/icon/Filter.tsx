import React, { forwardRef, memo } from 'react';

const Filter = memo(
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
        <path d="M18 29h-4a2 2 0 01-2-2v-8.176a.997.997 0 00-.293-.707L4.59 11A1.996 1.996 0 014 9.59V5a2 2 0 012-2h20a2 2 0 012 2v4.59a1.996 1.996 0 01-.59 1.41l-7.117 7.117a1 1 0 00-.293.707V27a2 2 0 01-2 2zM6 6v3.176c0 .265.105.52.293.707l7.121 7.121A2 2 0 0114 18.418V26a1 1 0 001 1h2a1 1 0 001-1v-7.582a2 2 0 01.586-1.414l7.121-7.121A1 1 0 0026 9.176V6a1 1 0 00-1-1H7a1 1 0 00-1 1z" />
      </svg>
    ),
  ),
);
Filter.displayName = 'Filter';
Filter['iconName'] = 'filter';
export default Filter;
