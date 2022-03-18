import React, { forwardRef, memo } from 'react';

const MarkerM = memo(
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
          fill="var(--color2, #fff)"
          d="M15.76 28.205l.662-.632.675-.651c5.969-5.818 8.982-10.512 8.982-14.218 0-5.776-4.617-10.464-10.32-10.464S5.439 6.928 5.439 12.704c0 3.843 3.24 8.75 9.658 14.869l.662.632zm-8.4-15.501c0-4.722 3.764-8.544 8.4-8.544s8.4 3.822 8.4 8.544c0 2.982-2.679 7.203-8.091 12.538l-.309.303c-5.619-5.478-8.4-9.802-8.4-12.841z"
        />
        <path
          fill="var(--color80, #ffd800)"
          d="M7.36 12.704c0-4.722 3.764-8.544 8.4-8.544s8.4 3.822 8.4 8.544c0 2.982-2.679 7.203-8.091 12.538l-.309.303c-5.619-5.478-8.4-9.802-8.4-12.841z"
        />
      </svg>
    ),
  ),
);
MarkerM.displayName = 'MarkerM';
MarkerM['iconName'] = 'marker_m';
export default MarkerM;
