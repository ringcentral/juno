import React, { forwardRef, memo } from 'react';

const Fax = memo(
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
        <path d="M29 3a1 1 0 010 2h-2v15h-7a2 2 0 00-1.994 1.851L18 22v7H7a2 2 0 01-2-2V5H3a1 1 0 010-2h26zm-2.272 19l-.025.058a3.003 3.003 0 01-.582.82l-5.536 5.536a2.022 2.022 0 01-.415.319l-.17.086V23a1 1 0 01.883-.993L21 22h5.728zM21 14H11a1 1 0 00-.117 1.993L11 16h10a1 1 0 000-2zm0-6H11a1 1 0 00-.117 1.993L11 10h10a1 1 0 000-2z" />
      </svg>
    ),
  ),
);
Fax.displayName = 'Fax';
Fax['iconName'] = 'fax';
export default Fax;
