import React, { forwardRef, memo } from 'react';

const SearchNav = memo(
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
        <path d="M14 3c6.075 0 11 4.925 11 11a10.95 10.95 0 01-2.454 6.926l6.197 6.195a1.5 1.5 0 11-2.121 2.121l-6.265-6.264A10.95 10.95 0 0114 25C7.925 25 3 20.075 3 14S7.925 3 14 3zm0 3a8 8 0 100 16 8 8 0 000-16z" />
      </svg>
    ),
  ),
);
SearchNav.displayName = 'SearchNav';
SearchNav['iconName'] = 'search_nav';
export default SearchNav;
