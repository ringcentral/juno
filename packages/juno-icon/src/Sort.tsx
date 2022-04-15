import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Sort = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#000"
        d="m16.707 5.293 5.586 5.586a1 1 0 0 1-.707 1.707H10.414a1 1 0 0 1-.707-1.707l5.586-5.586a.999.999 0 0 1 1.414 0z"
      />
      <path
        fill="#212121"
        d="m16.703 26.293 5.586-5.586A1 1 0 0 0 21.582 19H10.41a1 1 0 0 0-.707 1.707l5.586 5.586a1 1 0 0 0 1.414 0z"
      />
    </svg>
  )),
);
Sort.displayName = 'Sort';
Sort['iconName'] = 'sort';
export default Sort;
