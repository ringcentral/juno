import React, { forwardRef, memo } from 'react';

const Icon1 = memo(
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
        <path d="M13.498 15.148h1.805V9.025c0-.184.006-.37.018-.558L13.82 9.84c-.039.033-.078.057-.117.072a.308.308 0 01-.269-.019.292.292 0 01-.105-.097l-.328-.483L15.498 7h.85v8.148h1.653V16h-4.502v-.852z" />
      </svg>
    ),
  ),
);
Icon1.displayName = 'Icon1';
Icon1['iconName'] = '1';
export default Icon1;
