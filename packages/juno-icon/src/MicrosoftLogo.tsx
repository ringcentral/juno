import React, { forwardRef, memo } from 'react';

const MicrosoftLogo = memo(
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
        <path fill="var(--color49, #f1511b)" d="M15.403 15.403H4V4h11.403z" />
        <path
          fill="var(--color50, #80cc28)"
          d="M27.997 15.403H16.592V4h11.403v11.403z"
        />
        <path fill="var(--color51, #00adef)" d="M15.403 28H4V16.597h11.403z" />
        <path
          fill="var(--color52, #fbbc09)"
          d="M27.997 28H16.592V16.597h11.403V28z"
        />
      </svg>
    ),
  ),
);
MicrosoftLogo.displayName = 'MicrosoftLogo';
MicrosoftLogo['iconName'] = 'microsoft-logo';
export default MicrosoftLogo;
