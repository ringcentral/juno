import React, { forwardRef, memo } from 'react';

const BoxNew = memo(
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
        <path d="M15.984 10.254c-2.15 0-4.137.674-5.769 1.811V4.073C10.215 2.928 9.273 2 8.112 2s-2.103.928-2.103 2.073v15.272c-.021.259.003 1.756.072 2.181C6.772 26.314 10.937 30 15.985 30c5.532 0 10.016-4.42 10.016-9.873s-4.484-9.873-10.016-9.873zm0 15.56c-3.186 0-5.769-2.546-5.769-5.687s2.583-5.687 5.769-5.687 5.769 2.546 5.769 5.687-2.583 5.687-5.769 5.687z" />
      </svg>
    ),
  ),
);
BoxNew.displayName = 'BoxNew';
BoxNew['iconName'] = 'box-new';
export default BoxNew;
