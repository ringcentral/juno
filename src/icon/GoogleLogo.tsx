import React, { forwardRef, memo } from 'react';

const GoogleLogo = memo(
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
          fill="var(--color19, #ffc107)"
          d="M27.767 13.65H26.8v-.05H16v4.8h6.782A7.197 7.197 0 018.8 16 7.2 7.2 0 0116 8.8c1.835 0 3.505.692 4.777 1.823l3.394-3.394A11.946 11.946 0 0016 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12c0-.805-.083-1.59-.233-2.35z"
        />
        <path
          fill="var(--color46, #ff3d00)"
          d="M5.384 10.415l3.943 2.891A7.197 7.197 0 0116.001 8.8c1.835 0 3.505.692 4.777 1.823l3.394-3.394A11.946 11.946 0 0016.001 4c-4.609 0-8.606 2.602-10.616 6.415z"
        />
        <path
          fill="var(--color21, #4caf50)"
          d="M16 28c3.1 0 5.916-1.186 8.045-3.115l-3.714-3.143A7.143 7.143 0 0116 23.2c-3.121 0-5.771-1.99-6.77-4.768l-3.913 3.015C7.303 25.333 11.336 28 16 28z"
        />
        <path
          fill="var(--color20, #1976d2)"
          d="M27.767 13.65H26.8v-.05H16v4.8h6.782a7.229 7.229 0 01-2.452 3.343l.002-.001 3.714 3.143c-.263.239 3.955-2.884 3.955-8.884 0-.805-.083-1.59-.233-2.35z"
        />
      </svg>
    ),
  ),
);
GoogleLogo.displayName = 'GoogleLogo';
GoogleLogo['iconName'] = 'google-logo';
export default GoogleLogo;
