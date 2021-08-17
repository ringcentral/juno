import React, { forwardRef, memo } from 'react';

const JumpToLatest = memo(
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
        <path d="M6.101 17.101a.999.999 0 011.414 0L15 24.586V5a1 1 0 012 0v19.588l7.486-7.488a.999.999 0 111.414 1.414l-9.192 9.192a.999.999 0 01-1.414 0l-9.192-9.192a.999.999 0 010-1.414z" />
      </svg>
    ),
  ),
);
JumpToLatest.displayName = 'JumpToLatest';
JumpToLatest['iconName'] = 'jump-to-latest';
export default JumpToLatest;
