import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Filter = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M18 29h-4a2 2 0 0 1-2-2v-8.176a.997.997 0 0 0-.293-.707L4.59 11A1.996 1.996 0 0 1 4 9.59V5a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4.59a1.996 1.996 0 0 1-.59 1.41l-7.117 7.117a1 1 0 0 0-.293.707V27a2 2 0 0 1-2 2zM6 6v3.176c0 .265.105.52.293.707l7.121 7.121A2 2 0 0 1 14 18.418V26a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7.582a2 2 0 0 1 .586-1.414l7.121-7.121A1 1 0 0 0 26 9.176V6a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
    </svg>
  )),
);
Filter.displayName = 'Filter';
Filter['iconName'] = 'filter';
export default Filter;
