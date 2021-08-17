import React, { forwardRef, memo } from 'react';

const GoogleLogoDisabled = memo(
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
        <path d="M27.767 13.65H26.8v-.05H16v4.8h6.782A7.197 7.197 0 018.8 16 7.2 7.2 0 0116 8.8c1.835 0 3.505.692 4.777 1.823l3.394-3.394A11.946 11.946 0 0016 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12c0-.805-.083-1.59-.233-2.35z" />
      </svg>
    ),
  ),
);
GoogleLogoDisabled.displayName = 'GoogleLogoDisabled';
GoogleLogoDisabled['iconName'] = 'google-logo-disabled';
export default GoogleLogoDisabled;
