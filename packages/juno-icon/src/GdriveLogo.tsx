import React, { forwardRef, memo } from 'react';

const GdriveLogo = memo(
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
          fill="var(--color8, #0066da)"
          d="M4.117 24.441l1.235 2.133c.257.449.625.802 1.058 1.058l4.41-7.633H2c0 .497.128.994.385 1.443l1.732 2.999z"
        />
        <path
          fill="var(--color9, #00ac47)"
          d="M16 11.018l-4.41-7.633a2.909 2.909 0 00-1.058 1.058L2.385 18.555A2.9 2.9 0 002 19.998h8.82L16 11.017z"
        />
        <path
          fill="var(--color6, #ea4335)"
          d="M25.59 27.632a2.909 2.909 0 001.058-1.058l.513-.882 2.454-4.25A2.9 2.9 0 0030 19.999h-8.821l1.877 3.688 2.534 3.945z"
        />
        <path
          fill="var(--color10, #00832d)"
          d="M16 11.018l4.41-7.633A2.815 2.815 0 0018.967 3h-5.934a2.98 2.98 0 00-1.443.385L16 11.018z"
        />
        <path
          fill="var(--color11, #2684fc)"
          d="M21.18 19.999H10.82l-4.41 7.633c.433.257.93.385 1.443.385h16.293a2.98 2.98 0 001.443-.385l-4.41-7.633z"
        />
        <path
          fill="var(--color12, #ffba00)"
          d="M25.542 11.499l-4.073-7.056a2.909 2.909 0 00-1.058-1.058l-4.41 7.633 5.18 8.981h8.804a2.9 2.9 0 00-.385-1.443L25.543 11.5z"
        />
      </svg>
    ),
  ),
);
GdriveLogo.displayName = 'GdriveLogo';
GdriveLogo['iconName'] = 'gdrive-logo';
export default GdriveLogo;
