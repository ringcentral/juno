import React, { forwardRef, memo } from 'react';

const BrightnessContrast = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        ref={svgRef}
        {...props}
      >
        <path d="M16 8a8 8 0 100 16 8 8 0 000-16zm0 13V11c2.757 0 5 2.243 5 5s-2.243 5-5 5zm0 5a2 2 0 012 2v2a2 2 0 11-4 0v-2a2 2 0 012-2zm0-20a2 2 0 01-2-2V2a2 2 0 114 0v2a2 2 0 01-2 2zm14 8a2 2 0 110 4h-2a2 2 0 110-4h2zM6 16a2 2 0 01-2 2H2a2 2 0 110-4h2a2 2 0 012 2zm19.899 7.071l1.414 1.414a2 2 0 11-2.828 2.828l-1.414-1.414a2 2 0 112.828-2.828zM6.101 8.929L4.687 7.515a2 2 0 112.828-2.828l1.414 1.414a2 2 0 11-2.828 2.828zm19.798 0a2 2 0 11-2.828-2.828l1.414-1.414a2 2 0 112.828 2.828l-1.414 1.414zM6.101 23.071a2 2 0 112.828 2.828l-1.414 1.414a2 2 0 11-2.828-2.828l1.414-1.414z" />
      </svg>
    ),
  ),
);
BrightnessContrast.displayName = 'BrightnessContrast';
BrightnessContrast['iconName'] = 'brightness-contrast';
export default BrightnessContrast;
