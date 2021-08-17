import React, { forwardRef, memo } from 'react';

const DownwardsArrowWithTipRightwards = memo(
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
        <path d="M4 3a1 1 0 011 1v12a1 1 0 001 1l19.586.001-6.536-6.536a.999.999 0 111.414-1.414l8.243 8.243a.999.999 0 010 1.414l-8.243 8.243a.999.999 0 11-1.414-1.414l6.536-6.535L5 19.001a2 2 0 01-2-2v-13a1 1 0 011-1z" />
      </svg>
    ),
  ),
);
DownwardsArrowWithTipRightwards.displayName = 'DownwardsArrowWithTipRightwards';
DownwardsArrowWithTipRightwards['iconName'] =
  'downwards-arrow-with-tip-rightwards';
export default DownwardsArrowWithTipRightwards;
