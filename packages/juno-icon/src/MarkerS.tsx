import React, { forwardRef, memo } from 'react';

const MarkerS = memo(
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
        <path
          fill="var(--color5, #fff)"
          d="M14.671 28.015l1.079 1.032.69-.658C23.125 22.015 26.5 16.904 26.5 12.9 26.5 6.884 21.691 2 15.75 2S5 6.883 5 12.9c0 3.925 3.244 8.914 9.671 15.115zM7 12.9C7 7.981 10.921 4 15.75 4s8.75 3.981 8.75 8.9c0 3.098-2.775 7.479-8.38 13.013l-.37.363C9.897 20.57 7 16.065 7 12.9z"
        />
        <path
          fill="var(--color64, #4475fd)"
          d="M7 12.9C7 7.981 10.921 4 15.75 4s8.75 3.981 8.75 8.9c0 3.098-2.775 7.479-8.38 13.013l-.37.363C9.897 20.57 7 16.065 7 12.9z"
        />
      </svg>
    ),
  ),
);
MarkerS.displayName = 'MarkerS';
MarkerS['iconName'] = 'marker_s';
export default MarkerS;
