import React, { forwardRef, memo } from 'react';

const Gmail = memo(
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
          fill="var(--color3, #4285f4)"
          d="M3.909 27h4.455V15.67L2 10.671v14.33C2 26.107 2.856 27 3.909 27z"
        />
        <path
          fill="var(--color4, #34a853)"
          d="M23.636 27h4.455C29.147 27 30 26.104 30 25.001v-14.33l-6.364 4.999z"
        />
        <path
          fill="var(--color5, #fbbc04)"
          d="M23.636 7.005v8.664L30 10.67V8.004c0-2.473-2.695-3.882-4.582-2.399z"
        />
        <path
          fill="var(--color6, #ea4335)"
          d="M8.364 15.67V7.006L16 13.004l7.636-5.998v8.664L16 21.668z"
        />
        <path
          fill="var(--color7, #c5221f)"
          d="M2 8.005v2.666l6.364 4.999V7.006l-1.782-1.4C4.692 4.123 2 5.533 2 8.005z"
        />
      </svg>
    ),
  ),
);
Gmail.displayName = 'Gmail';
Gmail['iconName'] = 'gmail';
export default Gmail;
