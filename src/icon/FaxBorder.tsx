import React, { forwardRef, memo } from 'react';

const FaxBorder = memo(
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
        <path d="M29 3a1 1 0 010 2h-2v15.757c0 .796-.316 1.559-.879 2.121l-5.536 5.536a2 2 0 01-1.238.578l-.176.008H6.999a2 2 0 01-2-2V5h-2a1 1 0 010-2h26zm-4 2H7v21a1 1 0 001 1h10v-5a2 2 0 012-2h5V5zm-.83 17H21a1 1 0 00-1 1v3.17L24.17 22zM21 14a1 1 0 010 2H11a1 1 0 010-2h10zm0-6a1 1 0 010 2H11a1 1 0 010-2h10z" />
      </svg>
    ),
  ),
);
FaxBorder.displayName = 'FaxBorder';
FaxBorder['iconName'] = 'fax_border';
export default FaxBorder;
