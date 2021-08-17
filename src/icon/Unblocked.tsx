import React, { forwardRef, memo } from 'react';

const Unblocked = memo(
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
        <path d="M6.101 6.101C11.568.634 20.433.634 25.9 6.101s5.467 14.332 0 19.799c-5.467 5.467-14.332 5.467-19.799 0s-5.467-14.332 0-19.799zm16.97 1.414L7.515 23.071a.999.999 0 001.32 1.497l.094-.083L24.485 8.929a.999.999 0 00-1.32-1.497l-.094.083z" />
      </svg>
    ),
  ),
);
Unblocked.displayName = 'Unblocked';
Unblocked['iconName'] = 'unblocked';
export default Unblocked;
